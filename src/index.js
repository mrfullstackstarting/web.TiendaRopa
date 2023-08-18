//aqui pedimos al dom los elementos guardados .
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || {};
    loadCartList();
    data = JSON.parse(localStorage.getItem('dataNew')) || data;
    showProducts();
});
// la data de los productos
let data = [
    { "id": 1, "name": "Camiseta de manga corta con cuello redondo", "price": 10, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt1_prckre.png", "category": "shirt", "quantity": 5, "description": "Esta camiseta básica presenta un corte regular y un cuello redondo clásico. Es ideal para el uso diario y se puede combinar con una amplia variedad de looks.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["blue", "red", "black", "white"], },
    {
        "id": 2, "name": "Camiseta de manga larga con estampado gráfico", "price": 15, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt2_av4jld.png", "category": "shirt", "quantity": 3, "description": "Perfecta para un look casual, esta camiseta de manga larga presenta un estampado gráfico llamativo en el pecho. Su ajuste regular y suave tejido de algodón la hacen cómoda y fácil de usar.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white"],
    },
    {
        "id": 3, "name": "Camiseta con detalle de encaje", "price": 12, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt3_wlm0h3.png", "category": "shirt", "quantity": 2, "description": "Esta camiseta presenta un detalle de encaje en el escote y mangas. Su ajuste regular y tela suave la hacen cómoda y fácil de usar para cualquier ocasión.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white"],
    },
    {
        "id": 4, "name": "Camiseta de tirantes con espalda cruzada", "price": 8, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt4_cypl6n.png", "category": "shirt", "quantity": 10, "description": "Con un toque de estilo femenino, esta camiseta de tirantes presenta una espalda cruzada con detalle de encaje. El ajuste es regular y la tela suave y cómoda.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "gray"],
    },
    {
        "id": 5, "name": "Camiseta con hombros descubiertos", "price": 12, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/shirt5_cnwq0w.png", "category": "shirt", "quantity": 6, "description": "Con un toque femenino y coqueto, esta camiseta presenta hombros descubiertos y un ajuste regular. Su tela suave y transpirable la hace ideal para los días calurosos.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "gray"],
    },
    {
        "id": 6, "name": "Camiseta con cuello alto y manga larga", "price": 18, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/shirt6_pnwws6.png", "category": "shirt", "quantity": 4, "description": "Esta camiseta de manga larga presenta un cuello alto y ajuste regular. Es ideal para un look elegante y cómodo.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "gray"],
    },
    {
        "id": 7, "name": "Camiseta con cuello en V y manga corta", "price": 9, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/shirt7_ofhlzd.png", "category": "shirt", "quantity": 8, "description": "Esta camiseta clásica presenta un corte regular, cuello en V y mangas cortas. Es fácil de usar y combinar con diferentes looks.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "gray"],
    },
    {
        "id": 8, "name": "Hoddie con estampado de leopardo", "price": 20, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie4_wvwaiv.png", "category": "hoddie", "quantity": 8, "description": "Este hoddie presenta un estampado de leopardo y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y cómodo.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 9, "name": "Hoddie con cremallera", "price": 25, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie3_xboa0e.png", "category": "hoddie", "quantity": 10, "description": "Este hoddie presenta una cremallera frontal y bolsillos laterales. Está hecho de una mezcla de algodón y poliéster para mayor comodidad y durabilidad.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 10, "name": "Hoddie con capucha y cordón ajustable", "price": 30, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie2_utnolh.png", "category": "hoddie", "quantity": 6, "description": "Este hoddie presenta una capucha con cordón ajustable y un corte holgado para mayor comodidad. Está hecho de una mezcla suave de algodón y poliéster.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 11, "name": "Hoddie con estampado de marca", "price": 35, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270465/eCommerce/hoddie1_sxv2ce.png", "category": "hoddie", "quantity": 4, "description": "Este hoddie presenta un estampado de marca en la parte delantera y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 12, "name": "Hoddie con cierre de botones", "price": 40, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/hoddie5_sqnwic.png", "category": "hoddie", "quantity": 3, "description": "Este hoddie presenta un cierre de botones en la parte delantera y bolsillos laterales. Está hecho de una mezcla suave de algodón y poliéster para mayor comodidad y durabilidad.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 13, "name": "Hoddie con estampado de camuflaje", "price": 45, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270464/eCommerce/hoddie6_i7gdrl.png", "category": "hoddie", "quantity": 7, "description": "Este hoddie presenta un estampado de camuflaje y está hecho de una mezcla suave de algodón y poliéster. Es ideal para un look casual y moderno.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white", "green"],
    },
    {
        "id": 14, "name": "Sweater de punto grueso", "price": 10, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater1_o8qh0p.png", "category": "sweater", "quantity": 5, "description": "Este sweater de punto grueso es ideal para los días fríos. Está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white"],
    },
    {
        "id": 15, "name": "Sweater de cuello alto", "price": 15, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater2_y7yzqs.png", "category": "sweater", "quantity": 7, "description": "Este sweater de cuello alto está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look elegante y cálido.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white"],
    },
    {
        "id": 16, "name": "Sweater de tejido fino", "price": 20, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater3_nnfctl.png", "category": "sweater", "quantity": 3, "description": "Este sweater de tejido fino es ideal para los días frescos. Está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez.", sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["blue", "red", "black", "white"],
    },
    { "id": 17, "name": "Sweater con estampado de rayas", "price": 25, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater4_kxcvab.png", "category": "sweater", "quantity": 6, "description": "Este sweater presenta un estampado de rayas en la parte delantera y está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look casual y moderno.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["blue", "red", "black", "white"], },
    { "id": 18, "name": "Sweater con cuello redondo", "price": 30, "image": "https://res.cloudinary.com/duu1imwxs/image/upload/v1677270450/eCommerce/sweater5_hj94db.png", "category": "sweater", "quantity": 4, "description": "Este sweater con cuello redondo está hecho de una mezcla suave de lana y acrílico para mayor comodidad y calidez. Es ideal para un look casual y cómodo.", sizes: ["XS", "S", "M", "L", "XL", "XXL"], colors: ["blue", "red", "black", "white"], }
];
//  esta logica es para mostrar los productos de la api
function showProducts() {
    // aqui voy obtengo la etiqueda donde voy a agregar la view de mis productos

    let container = document.querySelector('.main--products-container');

    //  aqui la logica para hacer el view del los products
    let view = ``;
    data.forEach(item => {
        let card = `<article class="cards">
      <div class="image--container">`
        if (item.quantity === 0) {
            card += `<span class="sold-out">Agotado</span>`;
        }
        card += `<img src="${item.image}" alt="" class="img__prod" loading="easy">
      <div class="cards__buttons-container">
        <button onclick="addToCart(${item.id})" class="cursor">Agregar al carrito</button><button onclick="showDetails(${item.id})" class="cursor">detalles</button>
      </div>  
      </div>
      <div class="product-props">
        <h3>${item.name}</h3>
        <p class="price">$${item.price}</p>
        <p class="category light">${item.category}</p>
        <p class="stock light">disponibles: ${item.quantity}</p>
        <p class="title">Medidas</p>
        <p class="sizes light">`;

        for (const size of item.sizes) {
            card += `<span >${size}, </span>`;
        }

        card += `</p>
        <p class="title">Colores</p>
        <div class="colors-container">`;

        for (const color of item.colors) {
            card += `<span class="cube-color ${color}"></span>`
        }

        card += `</div> </div> </article>`;
        view += card;
    });
    container.innerHTML = view;
}
// hasta aqui termina la implementacion de los datos de la api en cards de productos

//in this variable i saved the tag to show cart status
let cartStatus = document.querySelector('.cart-status');

//in this variable i saved the tag to show cart with product list
let productsListRef = document.querySelector('.products-list');

//in this variable i saved the tag to show data to pay
let totalRef = document.querySelector('.total');

// this function find product in the data to show in panel detail
function showDetails(id) {
    let main = document.querySelector('#main');
    let product = data.find(item => {
        return item.id === id;
    });
    let view = `
    
    <section class="panelDetails" >
    <div class="panelDetailsClose" onclick="closeDetails()"></div>
    <article class="panelDetails--card">
      <img src="${product.image}" alt="">
      <span class="material-symbols-outlined close_button cursor" onclick="closeDetails()">
      &#xE5CD;
      </span>
      <button onclick="addToCart(${product.id})" class="detail-addToCart material-symbols-outlined cursor"><span class="material-symbols-outlined icons">&#xF1CC;</span> Agregar al carrito</button>
      <div class="details--product">
        <h3>
         ${product.name}
        </h3>
        <p class="price">$${product.price}</p>
        <p class="title">
          ${product.description}
        </p>
        <p class="category">${product.category}</p>
        <p class="stock">disponibles: ${product.quantity}</p>
      </div>
    </article>
  </section>`;
    main.innerHTML += view;
}

// this function save data in localestorage when this called
function localSave() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// this function add products on cart
function addToCart(id) {
    // this variable contain index fo product in variable data
    let productIndex = data.findIndex(item => {
        return item.id === id;
    });

    // verifi if exist stock of product
    if (data[productIndex].quantity === 0) {
        noHaveStock(productIndex);
    } else {
        // when the product with this id exist in cart, the product will added 1 more in cant
        if (cart[data[productIndex].id]) {

            if (cart[data[productIndex].id].cant < cart[data[productIndex].id].quantity) {

                cart[data[productIndex].id].cant += 1;
            }

        } else {
            // in this variable is stored the product with new values
            let newProductStructured = { cant: 1, ...data[productIndex] };
            // product structured is going to push into cart
            cart[data[productIndex].id] = newProductStructured;
        }
    }


    loadCartList();
    localSave();
}

// in this object will store the products
let cart = {};

// this function was used to show cart list in cart slider and show cart stuatus
function loadCartList() {
    let cartQuantity = 0;

    let view = ``;

    let cartInArray = Object.values(cart);

    for (const item of cartInArray) {
        cartQuantity += item.cant;
        view += `  <article>
      <div class="img-container ">
        <img src="${item.image}" alt="${item.name}">
        <p class="price">$${item.price}</p>
      </div>
      <div class="details-of-product">
        <p class="title">
          ${item.name}
        </p>
        <p class="stock">${item.quantity - item.cant} disponibles</p>
        <div class="cant">
          <button class="reduce-cant icon material-symbols-outlined" onclick="subtractOne(${item.id})">&#xE15B;</button>
          <span for="productCant">${item.cant} </span>
          <button class="add-cant icon material-symbols-outlined" onclick="addMore(${item.id}) ">&#xE145;</button>
        </div>
        
      </div>
      <div class="trash-and-total">
        <span class="material-symbols-outlined trash-product cursor" onclick="deleteProduct(${item.id})">
          &#xE872;
        </span>
      <p class="price total">${item.cant * item.price}$</p>
      </div>
    </article>`

    }
    // here will show cart status
    cartStatus.innerHTML = cartQuantity;

    productsListRef.innerHTML = view;

    payTotal(cartInArray);
}

// function to calculate total to pay

function payTotal(dataCart) {

    let subtotal = 0;

    let cupon = 0;

    let iva = 0;

    let total = 0;

    dataCart.forEach(item => {

        subtotal += item.cant * item.price;

    });

    iva = subtotal * 0.12;

    total = (iva + subtotal) - cupon;

    let view = `<p class="title">SUBTOTAL</p>
    <p class="sub-title">$${subtotal.toFixed(2)}</p>
    <p class="title">DESCUENTO</p>
    <p class="sub-title">$${cupon.toFixed(2)}</p>
    <p class="title">IVA 12%</p>
    <p class="sub-title">$${iva.toFixed(2)}</p>
    <p class="title">TOTAL</p>
    <p class="sub-title">$${total.toFixed(2)}</p>`;

    totalRef.innerHTML = view;
}

// function for clear cart products
function clearCart() {
    cart = {};

    loadCartList();

    localSave();

}

// function to remove product from cart

function deleteProduct(id) {
    delete cart[id];
    loadCartList();
    localSave();
}

// functions for buttons in cardproductslist buttons to will add more quantity or subtract one

function addMore(id) {
    if (cart[id].cant < cart[id].quantity) {
        cart[id].cant += 1;
        loadCartList();
        localSave();
    } else {
        noHaveStock(id);
    }

}

function subtractOne(id) {
    if (cart[id].cant > 0) {
        cart[id].cant -= 1;
        loadCartList();
        localSave();
    }

}

// function to buy products

function buyNow() {

    let cartInArray = Object.values(cart);

    cartInArray.forEach(item => {
        for (const dataProd of data) {
            if (item.id === dataProd.id) {
                dataProd.quantity -= item.cant;
            }
        }
        showProducts();
        clearCart();
        localSave();
        localStorage.setItem("dataNew", JSON.stringify(data));
    });
}

// function to show panel to notificate inexistence in stock
function noHaveStock(id) {

    let main = document.querySelector('#main');

    let view = `<section class="panelDetails" >
    <div class="panelDetailsClose" onclick="closeDetails()"></div>
    <article class="panelDetails--card">
      <img src="${data[id].image}" alt="">
      <span class="material-symbols-outlined close_button cursor" onclick="closeDetails()">
      &#xE5CD;
      </span>
      <p class="detail-addToCart cursor"><span class="material-symbols-outlined icons">&#xF1CC;</span> Notificame cuando haya en stock</p>
      <div class="details--product">
        <h3>
         ${data[id].name}
        </h3>
        <p class="title">
          Lo siento ya no hay stock de este producto.
        </p>
        <p class="title">
          sigue participando.
        </p>
        <span class="material-symbols-outlined ">
          &#xE7F2;
        </span>
      </div>
    </article>
  </section>
    `;

    main.innerHTML += view;

}