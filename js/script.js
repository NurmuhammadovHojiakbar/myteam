const elOpen = document.querySelector(".humburger");
const elClose = document.querySelector(".humburger-close");
const elSiteNav = document.querySelector(".site-nav");


elOpen.addEventListener("click", function(){
    elSiteNav.style.right = "0"
})
elClose.addEventListener("click", function(){
    elSiteNav.style.right = "-100%"
})



const elPlusButton = document.querySelectorAll(".director-button");
const elDirectorInfo = document.querySelectorAll(".director-info");

if(elPlusButton.length > 0){
    elPlusButton.forEach(function(plus){
        plus.addEventListener("click", function(){
            elPlusButton.forEach(function(item){
                item.classList.remove("director-button__focus")
             })
            elDirectorInfo.forEach(function(off){
                off.classList.remove("director-info__active")
             })
    
            plus.classList.add("director-button__focus")
                
               
    
        })
    })
    
}