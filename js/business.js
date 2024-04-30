const businessCardWrap = document.querySelector("#businessCard ul");
const cardList = document.querySelectorAll("#businessCard ul li");
let isFlip = false;
businessCardWrap.addEventListener("mouseenter", () => {
    if(screenWidth < 780) return;
    FlipCard();
});
businessCardWrap.addEventListener("mouseleave", () => {
    if(screenWidth < 780) return;
    FlipCard();
});
businessCardWrap.addEventListener("click", ()=>{
    if(screenWidth > 780) return;
    FlipCard();
})

function FlipCard(){
    if(isFlip){
        cardList[0].style.transform = "rotateY(0deg)";
        cardList[1].style.transform = "rotateY(180deg)";
    }
    else{
        cardList[0].style.transform = "rotateY(180deg)";
        cardList[1].style.transform = "rotateY(360deg)";
    }
    isFlip = !isFlip;
}