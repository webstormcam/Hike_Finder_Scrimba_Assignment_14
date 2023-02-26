const ham = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')
ham.addEventListener('click',function(){
    mobileNav.classList.toggle('mobile-options')
})