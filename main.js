let carts = document.querySelectorAll('.buy-btn');

let products = [
    {
        brand: "Vans",
        name: "SK8-Hi",
        price: 75,
        qtyInCart: 0,
        tag: "vans1"
    },
    {
        brand: 'Vans',
        name: 'Checkerboard Classic Slip-On',
        price: 100,
        qtyInCart: 0,
        tag: "vans2"
    },
    {
        brand: 'Vans',
        name: 'Authentic',
        price: 25,
        qtyInCart: 0,
        tag: "vans3"
    },
    {
        brand: 'Vans',
        name: 'Old Skool',
        price: 10,
        qtyInCart: 0,
        tag: "vans4"
    },
    {
        brand: 'Vans',
        name: 'Vans X Noon Goons Aut. 44 DX',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans5"
    },
    {
        brand: 'Vans',
        name: 'Team Wellness Sk8-Hi',
        price: 100,
        qtyInCart: 0,
        tag: "vans6"
    },
    {
        brand: 'Vans',
        name: 'Authentic Brown',
        price: 25,
        qtyInCart: 0,
        tag: "vans7"
    },
    {
        brand: 'Vans',
        name: 'CB Classic Slip-On (Brown/White)',
        price: 10,
        qtyInCart: 0,
        tag: "vans8"
    },
    {
        brand: 'Vans',
        name: 'Textured Classic Slip-On',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans9"
    },
    {
        brand: 'Vans',
        name: 'After Dark ComfyCush Old Skool',
        price: 100,
        qtyInCart: 0,
        tag: "vans10"
    },
    {
        brand: 'Vans',
        name: 'Old Skool Overt CC',
        price: 25,
        qtyInCart: 0,
        tag: "vans11"
    },
    {
        brand: 'Vans',
        name: 'CB Classic Slip-On (Orange)',
        price: 10,
        qtyInCart: 0,
        tag: "vans12"
    },
    {
        brand: 'Vans',
        name: 'Vintage Pop Old Skool',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans13"
    },
    {
        brand: 'Vans',
        name: 'Textured Sk8-Hi',
        price: 100,
        qtyInCart: 0,
        tag: "vans14"
    },
    {
        brand: 'Vans',
        name: 'Vintage Pop Sk8-Hi',
        price: 25,
        qtyInCart: 0,
        tag: "vans15"
    },
    {
        brand: 'Vans',
        name: 'Old Skool Overt CC',
        price: 10,
        qtyInCart: 0,
        tag: "vans16"
    },
    {
        brand: 'Vans',
        name: 'Pop Color Old Skool Overt CC',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans17"
    },
    {
        brand: 'Vans',
        name: 'Old Skool (Brown)',
        price: 100,
        qtyInCart: 0,
        tag: "vans18"
    },
    {
        brand: 'Vans',
        name: 'Anaheim Factory Authentic 44 DX',
        price: 25,
        qtyInCart: 0,
        tag: "vans19"
    },
    {
        brand: 'Vans',
        name: 'Classic Slip-On (Triple White)',
        price: 10,
        qtyInCart: 0,
        tag: "vans20"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Chron 2 Slip',
        price: 75,
        qtyInCart: 0,
        tag: "nike_sb_chron_2_slip"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Force 58',
        price: 100,
        qtyInCart: 0,
        tag: "nike_sb_force_58"
    }
        
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartQuantity (products[i]);
        totalCostForProduct (products[i]);
    })
}

// for incrementing of cart items count
function cartQuantity (product) {
    //console.log(product);
    let prodQuantity = localStorage.getItem('cartQuantity');
    prodQuantity = parseInt(prodQuantity);

    if (prodQuantity) {
        localStorage.setItem('cartQuantity', prodQuantity + 1);
        document.querySelector('.cart span').textContent = prodQuantity + 1;
    } else {
        localStorage.setItem('cartQuantity', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

// storing product info in local storage
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    //console.log(cartItems);

    if(cartItems != null){

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].qtyInCart += 1;
    } else {
        product.qtyInCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//para di mag zero kahit i refresh
function cartCountNotReset () {
    let prodQuantity = localStorage.getItem("cartQuantity");
    if(prodQuantity) {
        document.getElementsByClassName('.cart span').textContent = prodQuantity;
    }
}

// for product costing
function totalCostForProduct(product) {
    //console.log("The price is " + product.price);
    let costTotal = localStorage.getItem('totalCost');

    if (costTotal != null) {
        costTotal = parseInt(costTotal);
        localStorage.setItem("totalCost", costTotal + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    let costTotal = localStorage.getItem('totalCost');
    //console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="container product border border-dark">
            <table class="table text-center">
                <thead class="ulo">
                    <tr>
                        <th class="col-md-3 text-center">Delete</th>
                        <th scope="col-md-5">Item</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center">
                        <td class="col-md text-center pt-5"><iconify-icon icon="akar-icons:circle-x"></iconify-icon></td>
                        <td class="col-md-3 text-center"><img src="./img/${item.tag}.jpg" class="img-thumbnail"></td>
                        <td class="col-md-3 text-center">${item.name}</td>
                        <td class="col-md-3 text-center">
                            ${item.qtyInCart}
                        </td>
                        <td class="col-md-3 text-center">${item.price * item.qtyInCart}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            `
        })
    } else if (cartItems == null) {
        costTotal = 0.00;
        productContainer.innerHTML = `
            <div class="container noItems text-center mt-5 mb-5">
                <h3>No Items In Cart!</h3>
            </div>
        `
    }

        productContainer.innerHTML += `
            <div class="totalCostOfItem text-center">
                <h4 class="titleofCost">
                    Total Cost:
                </h4>
                <span>
                    <h4 class="valueCost">
                        $${costTotal}
                    </h4>
                </span>
                <button class="btn btn-primary mb-3">Check Out</button>
            </div>
        `

    

    //console.log(cartItems);
}



// this code execute on the initial load
displayCart();
cartCountNotReset();


