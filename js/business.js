const businessCardWrap = document.querySelector("#businessCard ul");
const cardList = document.querySelectorAll("#businessCard ul li");
let isMobile = false;
window.addEventListener("resize", ()=>{
    if (screenWidth < 780 && !isMobile){
        isMobile = true;
        cardList[0].style.transform = "rotateY(180deg)";
        cardList[1].style.transform = "rotateY(360deg)";
    }
})
businessCardWrap.addEventListener("mouseenter", () => {
    if (screenWidth < 780) return;
    cardList[0].style.transform = "rotateY(180deg)";
    cardList[1].style.transform = "rotateY(360deg)";
});
businessCardWrap.addEventListener("mouseleave", () => {
    if (screenWidth < 780) return;
    cardList[0].style.transform = "rotateY(0deg)";
    cardList[1].style.transform = "rotateY(180deg)";
});