const businessCardWrap = document.querySelector("#businessCard ul");
const cardList = document.querySelectorAll("#businessCard ul li");

businessCardWrap.addEventListener("mouseenter", () => {
    cardList[0].style.transform = "rotateY(180deg)";
    cardList[1].style.transform = "rotateY(360deg)";
});
businessCardWrap.addEventListener("mouseleave", () => {
    cardList[0].style.transform = "rotateY(0deg)";
    cardList[1].style.transform = "rotateY(180deg)";
});