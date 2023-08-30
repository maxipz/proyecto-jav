document.addEventListener("DOMContentLoaded", function() {        // Cuando carga la pagina
    let sortOrder = '';                                           // hace una variable vacia que despues la va a usar para saber si se ordena de forma ascendente/descendente
    let searchData = [];                                          // es un array vacio que se va a usar despues para mostrar los datos finales
  
    function cargarProductos(catID) {                             // Carga un parametro ( en este caso catID que es la categoria) en un link, busca los productos que estan en el link ${catID}
      if (catID) {
        const url = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;
        fetch(url)                                                // le hace un fetch a la url de arriba ,que en este caso le hace referencia a las categorias.
          .then(response => response.json())
          .then(resultado => {
            searchData = resultado.products;                       // guarda los productos de la categoria en searchData
            mostrarHTML(searchData);                               // carga searchDAta en mostrarHTML
          })
          .catch(error => console.error('Ocurrió un error:', error));
      }
    }
  
    function mostrarHTML(data) {
      const productosContainer = document.querySelector('.product-list');                       // agarra la product-list del html y la guarda en una variable
      const minPrice = parseFloat(document.querySelector('#rangeFilterPriceMin').value);        // agarra del html el valor  de la id #rangeFilterPRiceMin y la transforma en un float
      const maxPrice = parseFloat(document.querySelector('#rangeFilterPriceMax').value);        // agarra del html el valor  de la id #rangeFilterPRiceMax y la transforma en un float
      const searchInput = document.querySelector('#searchInput').value.trim().toLowerCase();    // agarra del html el valor de la id #searchInput y value.trim verifica que lo que esta entrando no este vacio y .tolower case lo transforma todo en minuscula
      
  
      if (sortOrder === 'asc') {
        data.sort((a, b) => a.cost - b.cost);       // data.sort((a, b) => a.name.localeCompare(b.name)); // Podemos ordenar de AZ por el nombre 
      } else if (sortOrder === 'desc') { 
        data.sort((a, b) => b.cost - a.cost);       // data.sort((a, b) => b.name.localeCompare(a.name)); // Podemos ordenar de ZA por el nombre 
      } else if (sortOrder === 'soldCount') {
        data.sort((a, b) => b.soldCount - a.soldCount);   // sortOrder lo ordena en base a la relevancia ( articulos de forma descendente )
      }
  
      let filteredData = data.filter(product => {           //  va a filtar los productos en base a una funcion
        const productPrice = parseFloat(product.cost);      // agarra el costo del producto,le pasa un parseFloat para que quede en decimal y lo guarda en la variable productPrice
  
        return ((productPrice >= minPrice) &&       // devuelve true cuando el precio sea mayor o igual al precio minimo   
                (productPrice <= maxPrice) &&       // cuando el precio sea menor o igual al precio maximo
                (product.name.toLowerCase().includes(searchInput) || product.description.toLowerCase().includes(searchInput)));     // devuelve el nombre del producto o la descripcion del producto
      });
  
      let htmlContent = '';
  
      filteredData.forEach(product => {
        htmlContent += `
          <div class="list-group-item list-group-item-action">
            <div class="row">
              <div class="col-3">
                <img src="${product.image}" alt="product image" class="img-thumbnail">
              </div>
              <div class="col">
                <div class="d-flex w-100 justify-content-between">
                  <div class="mb-1">
                    <h4>${product.name} - ${product.currency} ${product.cost}</h4>
                    <p>${product.description}</p>
                  </div>
                  <small class="text-muted">${product.soldCount} artículos</small>
                </div>
              </div>
            </div>
          </div>
        `;
      });
  
      productosContainer.innerHTML = htmlContent;
    }
  
    document.querySelector('#sortAsc').addEventListener('click', () => {
      sortOrder = 'asc';
      cargarProductos(catID);
    });
  
    document.querySelector('#sortDesc').addEventListener('click', () => {
      sortOrder = 'desc';
      cargarProductos(catID);
    });
  
    document.querySelector('#sortByCount').addEventListener('click', () => {
      sortOrder = 'soldCount';
      cargarProductos(catID);
    });
  
    document.querySelector('#rangeFilterPrice').addEventListener('click', () => {
      cargarProductos(catID);
    });
  
    document.querySelector('#clearRangeFilter').addEventListener('click', () => { // Limpiamos todos los campos 
      document.querySelector('#rangeFilterPriceMin').value = '';
      document.querySelector('#rangeFilterPriceMax').value = '';
      document.querySelector('#searchInput').value = '';
      sortOrder = '';
      cargarProductos(catID);
    });
  
    document.querySelector('#searchInput').addEventListener('input', () => {
      mostrarHTML(searchData);
    });
  
    const catID = localStorage.getItem("catID");
    cargarProductos(catID);
    
  });      

       