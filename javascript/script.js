const ham = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')
// This will toggle the Nav options on small screens!
ham.addEventListener('click',function(){
    mobileNav.classList.toggle('mobile-options')
})