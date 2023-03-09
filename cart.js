const products = [
    {
        name: "Ghrt",
        image: "img1.png",
        color:"red blue black",
        price: 99.99,
        qtty: 1,
    },
    {
        name: "HRTG",
        image: "img2.png",
        price: 80.99,
        qtty: 1,
    },
    {
        name: "GRTE",
        image: "img3.png",
        price: 100,
        qtty: 1,
    },
    {
        name: "JRWE",
        image: "img4.png",
        price: 210,
        qtty: 1,
    },
    {
        name: "JRAW",
        image: "img5.png",
        price: 150.99,
        qtty: 1,
    }, {
        name: "ORWE",
        image: "img6.png",
        price: 89.99,
        qtty: 1,
    },
    // {
    //     name: "Ogeve",
    //     image: "img41.png",
    //     price: 99.99,
    //     qtty: 1,
    // },{
    //     name: "Iuzr",
    //     image: "img8.png",
    //     price: 79.99,
    //     qtty: 1,
    // },
    // {
    //     name: "Grow",
    //     image: "img9.png",
    //     price: 79.99,
    //     qtty: 1,
    // },
];
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
});

//select the products row and add items dynamically
let productsRow = document.querySelector(".products");

//    for (let val of products) {
//     document.getElementById("products").innerHTML +=
//         `<div><p>${val.name}</p>
//      <p><img src="${val.image}" width="100"></p>
//      <p>${val.qtty}</p>
//      <p class="">${val.price} $</p>
//      <input type="submit" value="Add to cart" class="addToCart"></div><hr>`
// }



for (let product of products) {
    document.getElementById("products").innerHTML += `
    <div class="card product col my-4" style="width: 300px; margin:0 auto;">
                  <img class="card-img-top mt-2 px-3" src="${product.image
        }" alt="${product.name}">
                  <div class="card-body px-3 py-0">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, libero.</p>
                      <p class="card-text h3 text-end">${currencyFormater.format(
            (product.price).toFixed(2))}</p>
                      <p class="card-text3 d-flex justify-content-end"><button class="btn w-75 bg-primary-subtle product-button addToCart"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button></p>
   
                  </div>
              </div>
      `;
}



let cart = [];

let addToCartBtns = document.getElementsByClassName("addToCart");

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
        addToCart(products[i]);
    })
}



function total() {
    let total = 0;
    for (let val of cart) {
        total = total + (val.price * val.qtty);
    }
    document.getElementById("total").innerHTML = `Total : ${total} $`
}

function addToCart(obj) {
    if (cart.find(function (val) { return val.name == obj.name })) {
        obj.qtty++;
    } else {
        cart.push(obj);
    }
    createCartInHTML();
    total()
}
function createCartInHTML() {

    document.getElementById("cart").innerHTML = "";
    for (let val of cart) {
        document.getElementById("cart").innerHTML +=
            `<div style="display: flex; justify-content: space-around; align-items: center;"> <p class="name">${val.name}</p>
    <p><img src="${val.image}" width="100"></p>
    <p class="valie">${val.price}</p>
    <select class="color mb-3">
    <option selected class="">Color</option>
    <option value="1" class="red">Red</option>
    <option value="2" class="blue">Blue</option>
    <option value="3" class="black">Black</option>
    <option value="4" class="green">Green</option>
  </select>
    <p><p class="minus">-</p> <span class="qtty mb-3">${val.qtty}</span><p class="plus">+</p><p class="delete">X</p></p>
    </div>`
    }
    let plusBtns = document.getElementsByClassName("plus");
    let minusBtns = document.getElementsByClassName("minus");
    let deleteBtns =document.getElementsByClassName("delete");

    for (let i = 0; i < plusBtns.length; i++) {
        plusBtns[i].addEventListener("click", function () {
            cart[i].qtty++;
            document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;
            total()
        })
        minusBtns[i].addEventListener("click", function () {
            if (cart[i].qtty == 1) {
                cart.splice(i, 1);
                createCartInHTML();
                total();
            } else {
                cart[i].qtty--;
                document.getElementsByClassName("qtty")[i].innerHTML = cart[i].qtty;;
                total();
            } 
        })

        deleteBtns[i].addEventListener("click", function(){
            cart.splice(i, 1);
            createCartInHTML();
            total();
        })
    }
}


particlesJS("particles-js", {"particles":{"number":{"value":293,"density":{"enable":false,"value_area":800}},"color":{"value":"#250ba9"},"shape":{"type":"edge","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":72.89633331443432,"size_min":10.52947036764051,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ede6e6","opacity":0.4,"width":3.1987205117952833},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
