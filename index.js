const hamburger = document.getElementsByClassName("hamburger")[0]
const menuBar = document.getElementById("menubar")
const computer = document.querySelectorAll('.computer')
const items = document.getElementsByClassName('items')[0]
// console.log(hamburger)
hamburger.addEventListener('click', ()=>{
    menuBar.classList.toggle("hidden")
})

const products = [{
    id:1,
    category: "Camera",
    img:'/images/cart items/4k camcode.jpeg',
    price: 50000
},
{
    id:2,
    category:"Laptop",
    img:"/images/cart items/apple macbook.jpeg",
    price: 50000
},
{
    id:3,
    category:"Camera",
    img:"/images/cart items/camera.jpeg",
    price: 50000
},
{
    id:4,
    category:"Headset",
    img:"/images/cart items/cartitem1.jpeg",
    price: 50000
},
{
    id:5,
    category:"Headset",
    img:"/images/cart items/cartitem2.jpeg",
    price: 50000
},
{
    id:6,
    category:"Laptop",
    img:"/images/cart items/cartitem4.jpeg",
    price:50000
},
{
    id:7,
    category:"Laptop",
    img:"/images/cart items/cartitem5.jpeg",
    price: 50000
},
{
    id:8,
    category:"Laptop",
    img:"/images/cart items/cartitem8.jpeg",
    price:50000
},
{
    id:9,
    category:"Laptop",
    img:"/images/cart items/dell laptop.jpeg",
    price:50000
},
{
    id:10,
    category:"Camera",
    img:"/images/cart items/digital camcoder.jpeg",
    price: 50000
},
{
    id:11,
    category:"Headset",
    img:"/images/cart items/havit wireles.jpeg",
    price: 50000
},
{
    id:12,
    category:"Computer",
    img:"/images/cart items/hp desktop 2.jpeg",
    price: 50000
},
{
    id:13,
    category:"Computer",
    img:"/images/cart items/hp desktop.jpeg",
    price: 50000
},
{
    id:14,
    category:"Phone",
    img:"/images/cart items/infinix.jpeg",
    price: 50000
},
{
    id:15,
    category:"Phone",
    img:"/images/cart items/iphone 11.jpeg",
    price:50000
},
{
    id:16,
    category:"Phone",
    img:"/images/cart items/iphone x.jpeg",
    price:50000
},
{
    id:17,
    category:"Phone",
    img:"/images/cart items/iphone xr.jpeg",
    price:50000
},
{
    id:18,
    category:"Phone",
    img:"/images/cart items/iphone xs.jpeg",
    price:50000
},
{
    id:19,
    category:"Computer",
    img:"/images/cart items/lenovo dekstop3.jpeg",
    price:50000
},
{
    id:20,
    category:"Laptop",
    img:"/images/cart items/lenovo laptop.jpeg",
    price:50000
},
{
    id:21,
    category:"Tablet",
    img:"/images/cart items/lenovo tab.jpeg",
    price:50000
},
{
    id:22,
    category:"Laptop",
    img:"/images/cart items/lenovo.jpeg",
    price:50000
},
{
    id:23,
    category:"Laptop",
    img:"/images/cart items/macbook.jpeg",
    price:50000
},
{
    id:24,
    category:"Phone",
    img:"/images/cart items/techno.jpeg",
    price:50000
},
{
    id:25,
    category:"Camera",
    img:"/images/cart items/sony camera.jpeg",
    price:50000
},
{
    id:26,
    category:"Phone",
    img:"/images/cart items/smasung mobile.jpeg",
    price:50000
},
{
    id:27,
    category:"Phone",
    img:"/images/cart items/samsung.jpeg",
    price:50000
},
{
    id:28,
    category:"Phone",
    img:"/images/cart items/samsung tab.jpeg",
    price:50000
},
{
    id:29,
    category:"Phone",
    img:"/images/cart items/phone 12.jpeg",
    price:50000
},
{
    id:30,
    category:"Tablet",
    img:"/images/cart items/note plus.jpeg",
    price:50000
},
{
    id:31,
    category:"Camera",
    img:"/images/cart items/nikon camera.jpeg",
    price:50000
},
{
    id:32,
    category:"Laptop",
    img:"/images/cart items/macbookpro.jpeg",
    price:50000
},

]

let product = ""
for(let items of products){
    product += ` <div class="item mx-auto">
    <div class="w-[]">
      <img class="" src="${items.img}" />
      <div class="text-lg text-center">${items.category}</div>
      <div class="mx-[2%] my-[3%] flex justify-between items-center">
        <div class="">₦${items.price}</div>
        <button class="hover:bg-blue-200 bg-blue-500 p-[2%] rounded">Add to Cart</button>
      </div>
    </div>
  </div>`
}
items.innerHTML = product
// console.log(items)

computer.addEventListener("click", (e)=>{
e.target.value
console.log(e.target.value)
alert('help')
})