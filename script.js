const hamBtn = document.getElementById("nav-ham")
const navList = document.getElementById("nav-list")
hamBtn.addEventListener('click',()=>{
    navList.classList.toggle('nav__list--show')
})