
// const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

// // console.log('Fetching data...');
// // Realiza la solicitud fetch
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         // Obtén la referencia al contenedor de la lista de productos
//         const productos = document.querySelector('.product-list');

//         // Construye el contenido HTML 
//         let htmlContent = '';

//         data.products.forEach(product => {
//             htmlContent += `
//                 <div class="list-group-item list-group-item-action">
//                     <div class="row">
//                         <div class="col-3">
//                             <img src="${product.image}" alt="product image" class="img-thumbnail">
//                         </div>
//                         <div class="col">
//                             <div class="d-flex w-100 justify-content-between">
//                                 <div class="mb-1">
//                                     <h4>${product.name} - ${product.currency} ${product.cost}</h4>
//                                     <p>${product.description}</p>
//                                 </div>
//                                 <small class="text-muted">${product.soldCount} artículos</small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         });

//         // Inserta el contenido HTML en el contenedor
//         productos.innerHTML = htmlContent;
//     })
//     .catch(error => {
//         console.error('Error fetching data');
//     })


// solucion de Aby

// const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

// const productsArray = [];

// function showData(array) {
// //   const productListContainer = document.getElementById("product-list");
//   const productListContainer = document.querySelector(".product-list");
//   let htmlContentToAppend = '';

//   productsArray.forEach(category => {
//     htmlContentToAppend += `
//     <div class="list-group-item list-group-item-action">
//         <div class="row">
//             <div class="col-3">
//                 <img src="` + category.image + `" alt="product image" class="img-thumbnail">
//             </div>
//             <div class="col">
//                 <div class="d-flex w-100 justify-content-between">
//                     <div class="mb-1">
//                     <h4>`+ category.name + ' - ' + category.currency + ' ' + category.cost + `</h4> 
//                     <p> `+ category.description + `</p> 
//                     </div>
//                     <small class="text-muted">` + category.soldCount + ` artículos</small> 
//                 </div>

//             </div>
//         </div>
//     </div>
//     `
//     productListContainer.innerHTML = htmlContentToAppend;
//   })

// };

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     productsArray.push(...data.products);

//     showData(productsArray);
//   })
//   .catch(error => console.error('Error al cargar los productos', error));


// Solucion codigoconjuan

const url = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(url)
    .then(response => response.json())
    .then(resultado => mostrarHTML ( resultado ));

    
    function mostrarHTML(data){
        const productos = document.querySelector('.product-list');

        let htmlContent = '';

        data.products.forEach(product => {
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

        productos.innerHTML = htmlContent;
    }
       

       