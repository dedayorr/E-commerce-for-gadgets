const hamburger = document.getElementsByClassName("hamburger")[0]
const menuBar = document.getElementById("menubar")
const list = document.querySelectorAll('li')
const items = document.getElementsByClassName('items')[0]
// console.log(hamburger)
hamburger.addEventListener('click', ()=>{
    menuBar.classList.toggle("hidden")
})

list.addEventListener('click', ()=>{
items.classList.display = ""
})
