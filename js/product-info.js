function ObtenerInfo(ID) {
    const url = `https://japceibal.github.io/emercado-api/products/${ID}.json`;
    fetch(url)
      .then(response => response.json())
      .then(resultado => {
       const Titulo = document.getElementById("Titulo");
        Titulo.innerHTML = resultado.name;
        
       const Precio = document.getElementById("Precio");
       Precio.innerHTML = "Precio " + resultado.cost;

       const Descripcion = document.getElementById("Descripcion");
       Descripcion.innerHTML = "Descripcion " + resultado.description;

       const Categoria = document.getElementById("Categorias");
       Categoria.innerHTML = "Categorías " + resultado.category;

       const CantidadVendidos = document.getElementById("CantVendidos");
       CantidadVendidos.innerHTML = "Cantidad de Vendidos " + resultado.soldCount;
      })
      .catch(error => console.error('Ocurrió un error:', error)); 
  }
  
  
  window.onload = function() {
    ObtenerInfo(localStorage.getItem("IdProducto"));
  };