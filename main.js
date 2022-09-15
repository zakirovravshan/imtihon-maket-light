var burger = document.querySelector('.burger__btn')
var navbar = document.querySelector('.navbar')

burger.addEventListener('click' , function(){
    navbar.classList.toggle('.open')
})