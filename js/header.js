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
for(let i = 0; i < gnbText.length; i++){
    gnbText[i].addEventListener("click", ()=>{
        if(i == 0){
            curScrollIndex = 3;
        }
        else{
            curScrollIndex = 4;
        }
    })
}
gnbText[0].addEventListener("click", ()=>{
    curScrollIndex = 3;
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