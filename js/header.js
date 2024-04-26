const navBtn = document.getElementById("navBtn");
const gnb = document.getElementById("gnb");
const header = document.getElementById("header");
const gnbText = document.querySelectorAll("#gnbWrap li a");
let isGnbOpen = false;
let screenWidth = window.innerWidth;
window.addEventListener("resize", function(event){
    screenWidth = window.innerWidth;
    if(screenWidth > 1024 && !isGnbOpen){
        ToggleNav(true);
    }
    if(screenWidth < 1024 && isGnbOpen){
        ToggleNav(true);
    }
})
navBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    if(screenWidth > 1024) return;
    ToggleNav();
})
gnb.addEventListener("transitionend", ()=>{
    gnb.style.transition = "";
})
function ToggleNav(option = false){
    isGnbOpen = !isGnbOpen;
    gnb.style.transform = `translateX(${isGnbOpen ? 0 : 100}%)`;
    if(!option){
        gnb.style.transition = "transform 1.0s";
    } 
}
function ToggleHeaderColor(txtColor){
    header.style.color = txtColor;
    for(let i = 0; i < gnbText.length; i++){
        gnbText[i].style.color = txtColor;
    }
    //이미지도바꾸기
}