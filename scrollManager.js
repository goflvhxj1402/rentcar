const arrSection = document.querySelectorAll("section");
const scrollAmount = window.innerHeight;
let isScrolling = false;
let maxScrollIndex = arrSection.length;
let curScrollIndex = 0;
let isMotoDone = false;
let firstTouchPos;
//리로드이벤트
window.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
        window.scroll(0, 0);
    }, this.performance.now());
})
//리사이즈이벤트
window.addEventListener("resize", function (event) {
    scrollAmount = window.innerHeight;
});
//스크롤이벤트
window.addEventListener("wheel", function (event) {
    ScrollSection((event.deltaY > 0) ? 1 : -1);
});
//터치이벤트
window.addEventListener("touchstart", function(event){
    firstTouchPos = event.touches[0].pageY;
});
window.addEventListener("touchend", function(event){
    let gap = firstTouchPos - event.changedTouches[0].pageY;
    if(gap > -49 && gap < 49){
        return;
    } 
    else if(gap > 50){
        gap = 1;
    }
    else{
        gap = -1;
    }
    ScrollSection(gap);
});
//함수
function ScrollSection(dir) {
    if ((dir == 1 && curScrollIndex >= maxScrollIndex)
        || (dir == -1 && curScrollIndex == 0)) {
        return;
    }
    if (isScrolling) return;
    isScrolling = true;
    if (curScrollIndex == 3 && !isMotoDone) {
        ScrollMoto();
        return;
    }
    curScrollIndex += dir;
    window.scroll({
        top: scrollAmount * curScrollIndex,
        behavior: "smooth"
    });
    setTimeout(() => {
        isScrolling = false;
    }, 800)
}