const hamburger = document.getElementsByClassName("hamburger")[0]
const menuBar = document.getElementById("menubar")
// console.log(hamburger)
hamburger.addEventListener('click', ()=>{
    menuBar.classList.toggle("hidden")
})