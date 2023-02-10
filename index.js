const hamburger = document.getElementsByClassName("hamburger")[0];
const menuBar = document.getElementById("menubar");
const items = document.getElementsByClassName("items")[0];
const computer = document.getElementsByClassName("computer")[0];
const computerTwo = document.getElementsByClassName("computerTwo")[0];
const laptop = document.getElementsByClassName("laptop")[0];
const laptoptwo = document.getElementsByClassName("laptoptwo")[0];
const phone = document.getElementsByClassName("phone")[0];
const phonetwo = document.getElementsByClassName("phonetwo")[0];
const headset = document.getElementsByClassName("headset")[0];
const headsettwo = document.getElementsByClassName("headsettwo")[0];
const tablet = document.getElementsByClassName("tablet")[0];
const tablettwo = document.getElementsByClassName("tablettwo")[0];
const camera = document.getElementsByClassName("camera")[0];
const cameratwo = document.getElementsByClassName("cameratwo")[0];
const addbtn = document.getElementsByClassName("addbtn");
const cartTable = document.getElementsByClassName("carttable")[0];
const carts = document.getElementsByClassName("carts")[0];
const carticon = document.getElementsByClassName("carticon")[0];
const carticontwo = document.getElementsByClassName("carticontwo")[0];

hamburger.addEventListener("click", () => {
  menuBar.classList.toggle("hidden");
});

carticon.addEventListener("click", () => {
  carts.classList.toggle("hidden");
});
carticontwo.addEventListener("click", () => {
  // e.preventDefault()
  carts.classList.toggle("hidden");
});



// ARRAY OF OBJECTS OF PRODUCTS
const products = [
  {
    id: 1,
    category: "Camera",
    img: "/images/cart items/4k camcode.jpeg",
    price: 50000,
  },
  {
    id: 2,
    category: "Laptop",
    img: "/images/cart items/apple macbook.jpeg",
    price: 50000,
  },
  {
    id: 3,
    category: "Camera",
    img: "/images/cart items/camera.jpeg",
    price: 50000,
  },
  {
    id: 4,
    category: "Headset",
    img: "/images/cart items/cartitem1.jpeg",
    price: 50000,
  },
  {
    id: 5,
    category: "Headset",
    img: "/images/cart items/cartitem2.jpeg",
    price: 50000,
  },
  {
    id: 6,
    category: "Laptop",
    img: "/images/cart items/cartitem4.jpeg",
    price: 50000,
  },
  {
    id: 7,
    category: "Laptop",
    img: "/images/cart items/cartitem5.jpeg",
    price: 50000,
  },
  {
    id: 8,
    category: "Laptop",
    img: "/images/cart items/cartitem8.jpeg",
    price: 50000,
  },
  {
    id: 9,
    category: "Laptop",
    img: "/images/cart items/dell laptop.jpeg",
    price: 50000,
  },
  {
    id: 10,
    category: "Camera",
    img: "/images/cart items/digital camcoder.jpeg",
    price: 50000,
  },
  {
    id: 11,
    category: "Headset",
    img: "/images/cart items/havit wireles.jpeg",
    price: 50000,
  },
  {
    id: 12,
    category: "Computer",
    img: "/images/cart items/hp desktop 2.jpeg",
    price: 50000,
  },
  {
    id: 13,
    category: "Computer",
    img: "/images/cart items/hp desktop.jpeg",
    price: 50000,
  },
  {
    id: 14,
    category: "Phone",
    img: "/images/cart items/infinix.jpeg",
    price: 50000,
  },
  {
    id: 15,
    category: "Phone",
    img: "/images/cart items/iphone 11.jpeg",
    price: 50000,
  },
  {
    id: 16,
    category: "Phone",
    img: "/images/cart items/iphone x.jpeg",
    price: 50000,
  },
  {
    id: 17,
    category: "Phone",
    img: "/images/cart items/iphone xr.jpeg",
    price: 50000,
  },
  {
    id: 18,
    category: "Phone",
    img: "/images/cart items/iphone xs.jpeg",
    price: 50000,
  },
  {
    id: 19,
    category: "Computer",
    img: "/images/cart items/lenovo dekstop3.jpeg",
    price: 50000,
  },
  {
    id: 20,
    category: "Laptop",
    img: "/images/cart items/lenovo laptop.jpeg",
    price: 50000,
  },
  {
    id: 21,
    category: "Tablet",
    img: "/images/cart items/lenovo tab.jpeg",
    price: 50000,
  },
  {
    id: 22,
    category: "Laptop",
    img: "/images/cart items/lenovo.jpeg",
    price: 50000,
  },
  {
    id: 23,
    category: "Laptop",
    img: "/images/cart items/macbook.jpeg",
    price: 50000,
  },
  {
    id: 24,
    category: "Phone",
    img: "/images/cart items/techno.jpeg",
    price: 50000,
  },
  {
    id: 25,
    category: "Camera",
    img: "/images/cart items/sony camera.jpeg",
    price: 50000,
  },
  {
    id: 26,
    category: "Phone",
    img: "/images/cart items/smasung mobile.jpeg",
    price: 50000,
  },
  {
    id: 27,
    category: "Phone",
    img: "/images/cart items/samsung.jpeg",
    price: 50000,
  },
  {
    id: 28,
    category: "Phone",
    img: "/images/cart items/samsung tab.jpeg",
    price: 50000,
  },
  {
    id: 29,
    category: "Phone",
    img: "/images/cart items/phone 12.jpeg",
    price: 50000,
  },
  {
    id: 30,
    category: "Tablet",
    img: "/images/cart items/note plus.jpeg",
    price: 50000,
  },
  {
    id: 31,
    category: "Camera",
    img: "/images/cart items/nikon camera.jpeg",
    price: 50000,
  },
  {
    id: 32,
    category: "Laptop",
    img: "/images/cart items/macbookpro.jpeg",
    price: 50000,
  },
];

let product = "";
for (let items of products) {
  product += ` <div class="item mx-auto">
    <div class="w-[]">
      <img class="image" src="${items.img}" />
      <div class="item-category text-lg text-center">${items.category}</div>
      <div class="mx-[2%] my-[3%] flex justify-between items-center">
        <div class="price">₦${items.price}</div>
        <button class="addbtn hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
      </div>
    </div>
  </div>`;
}
items.innerHTML = product;


// FILTERED CATEGORIES
const filteredComputer = products.filter(
  (product) => product.category === "Computer"
);
const filteredLaptop = products.filter(
  (product) => product.category === "Laptop"
);
const filteredPhone = products.filter(
  (product) => product.category === "Phone"
);
const filteredCamera = products.filter(
  (product) => product.category === "Camera"
);
const filteredHeadset = products.filter(
  (product) => product.category === "Headset"
);
const filteredTablet = products.filter(
  (product) => product.category === "Tablet"
);


// FILTERED COMPUTER
computer.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredComputer) {
    product += ` <div class="item mx-auto h-[40%] ">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
computerTwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredComputer) {
    product += ` <div class="item mx-auto h-[40%]">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// FILTERED LAPTOP
laptop.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredLaptop) {
    product += ` <div class="item mx-auto h-[40%] ">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="addbtn hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
laptoptwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredLaptop) {
    product += ` <div class="item mx-auto">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// FILTERED PHONE
phone.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredPhone) {
    product += ` <div class="item mx-auto h-[40%] ">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
phonetwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredPhone) {
    product += ` <div class="item mx-auto">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// FILTERED CAMERA
camera.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredCamera) {
    product += ` <div class="item mx-auto h-[40%] ">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
cameratwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredCamera) {
    product += ` <div class="item mx-auto">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// FILTERED HEADSET
headset.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredHeadset) {
    product += ` <div class="item mx-auto h-[40%]">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
headsettwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredHeadset) {
    product += ` <div class="item mx-auto h-[40%]">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// FILTERED TABLET
tablet.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredTablet) {
    product += ` <div class="item mx-auto h-[40%] ">
        <div class="w-[] h-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});
tablettwo.addEventListener("click", (e) => {
  e.preventDefault();
  let product = "";
  for (let items of filteredTablet) {
    product += ` <div class="item mx-auto">
        <div class="w-[]">
          <img class="" src="${items.img}" />
          <div class="text-lg text-center">${items.category}</div>
          <div class="mx-[2%] my-[3%] flex justify-between items-center">
            <div class="">₦${items.price}</div>
            <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
          </div>
        </div>
      </div>`;
  }
  items.innerHTML = product;
});

// TO ADD ITEM TO CART
for (let i = 0; i < addbtn.length; i++) {
  const addTo = addbtn[i];
  addTo.addEventListener("click", addCartItem);
}

function addCartItem(e) {
  const addItem = e.target.parentElement.parentElement;
  const category = addItem.getElementsByClassName("item-category")[0].innerText;
  console.log(category);
  const price = addItem.getElementsByClassName("price")[0].textContent;
  console.log(price);
  const imageSrc = addItem.getElementsByClassName("image")[0].src;
  console.log(imageSrc);
  addItemsToCart(category, price, imageSrc);
}

function addItemsToCart(category, price, imageSrc) {
  const cartSection = document.createElement("div");
  cartSection.className = "cart-items";
  const cartItems = document.getElementsByClassName("carttable")[0];

  const cartSectionContents = ` <div class="cart-item flex flex-col justify-center">
    <div class="p-[2%] mx-auto flex justify-between">
      <img class="w-[50px] image" src=${imageSrc} alt="" />
      <div class="text-sm item-title">${category}</div>
      <input class="item-qty w-[10%] h-[20px] bg-slate-200 text-center" type="number" id="item-qty" value="1">
        <div class="item-price text-sm">${price}</div>
    </div>
    <button class="remove-btn hover:bg-blue-200 bg-blue-500 p-[1%] rounded mx-auto mb-[3%]">
     remove
    </button>
    </div>`;

  cartSection.innerHTML = cartSectionContents;
  cartItems.appendChild(cartSection);

  const removebtn = cartItems.getElementsByClassName("remove-btn");
  for (let i = 0; i < removebtn.length; i++) {
    const button = removebtn[i];
    button.addEventListener("click", removeCartItem);
  }
 
  cartSection
  .getElementsByClassName("item-qty")[0]
  .addEventListener("change", qauntityChanged);

  updatedCartTotal();
}

// TO REMOVE ITEM FROM CART
function removeCartItem(e) {
  const clickedBtn = e.target.parentElement.remove();
  updatedCartTotal();
}

// TO UPDATE CART TOTAL
function updatedCartTotal() {
  const cartTable = document.getElementsByClassName("carttable")[0];
  const cartBody = cartTable.querySelectorAll(".cart-items");
  let total = 0;
  for (let i = 0; i < cartBody.length; i++) {
    
    const cartbodies = cartBody[i];
    const priceElement = cartbodies.getElementsByClassName("item-price")[0];
    const quantityElement = cartbodies.getElementsByClassName("item-qty")[0];
    let price;
    if (priceElement) {
      price = parseFloat(priceElement.textContent.replace("₦", ""));
    }
    let quantity;
    if (quantityElement) {
      quantity = parseInt(quantityElement.value);
    }
    console.log(quantity, 'total')

    if(price && quantity){
      total = Number(total) + Number(price) * Number(quantity);
    }
    
  }
  
  finalTotal(total);
}
  function finalTotal(total) {
    grandtotal = Math.round(Number(total) * 100) / 100;
    document.getElementsByClassName(
      "cart-total"
    )[0].textContent = `Total: ₦${grandtotal}`;
    // console.log(grandtotal);
  }

  const qtyInputs = cartTable.getElementsByClassName("item-qty");
  for (let i = 0; i < qtyInputs.length; i++) {
    const input = qtyInputs[i];
    input.addEventListener("input", qauntityChanged);
  }

  function qauntityChanged(e){
    const input = e.target;
    console.log(input,'input')
    // alert(e.target.value)
    if(input.value <= 0){
      input.value = 1;
    }
    updatedCartTotal();
  } 

  document
    .getElementsByClassName("purchase-button")[0]
    .addEventListener("click", purchaseItems);

  function purchaseItems() {
    alert("Thank you for your purchase");
    const cartitems = document.getElementsByClassName("carttable")[0];
    while (cartitems.hasChildNodes()) {
      // cartitems.removeChild(cartitems.firstchild)
      document.getElementsByClassName("carttable")[0].innerHTML = "";
    }
  }
