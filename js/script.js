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

for(let i=0; i<elPlusButton.length; i++){
    elPlusButton[i].addEventListener("click", function(){
        elPlusButton.forEach(function(itemA){
            itemA.classList.remove("director-button__focus")
        })
        elDirectorInfo.forEach(function(itemB){
            itemB.classList.remove("director-info__active")
        })

        elPlusButton[i].classList.add("director-button__focus")
        elPlusButton[i].nextElementSibling.classList.add("director-info__active")
    })
}