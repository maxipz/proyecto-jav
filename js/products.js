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
       

       