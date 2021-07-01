const elOpen = document.querySelector(".humburger");
const elClose = document.querySelector(".humburger-close");
const elSiteNav = document.querySelector(".site-nav");


elOpen.addEventListener("click", function(){
    elSiteNav.style.right = "0"
})
elClose.addEventListener("click", function(){
    elSiteNav.style.right = "-100%"
})
