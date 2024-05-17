const arrSection = document.querySelectorAll("section");
let scrollAmount = window.innerHeight;
let isScrolling = false;
let maxScrollIndex = arrSection.length;
let curScrollIndex = 0;
let isMotoDone = false;
let firstTouchPos;
let isLoaded = false;
let isMobileMode = false;

//리로드이벤트
window.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
        isLoaded = true;
        scrollAmount = this.window.innerHeight;
        (this.window.innerWidth < 781) ? 
        mobileMode() : this.window.scroll(0, 0);
    }, this.performance.now());
})
//리사이즈이벤트
window.addEventListener("resize", function (event) {
    if (isMobileMode) return;
    scrollAmount = window.innerHeight;
    window.scroll(0, curScrollIndex * scrollAmount);
});
//스크롤이벤트
window.addEventListener("wheel", function (event) {
    if (!isLoaded || isMobileMode) return;
    ScrollSection((event.deltaY > 0) ? 1 : -1);
});
//터치이벤트
// window.addEventListener("touchstart", function (event) {
//     if (!isLoaded) return;
//     firstTouchPos = event.touches[0].pageY;
// });
// window.addEventListener("touchend", function (event) {
//     if (!isLoaded) return;
//     let gap = firstTouchPos - event.changedTouches[0].pageY;
//     if (gap > -49 && gap < 49) {
//         return;
//     }
//     else if (gap > 50) {
//         gap = 1;
//     }
//     else {
//         gap = -1;
//     }
//     ScrollSection(gap);
// });
//함수
function ScrollSection(dir) {
    if (isMobileMode) return;
    if ((dir == 1 && curScrollIndex >= maxScrollIndex)
        || (dir == -1 && curScrollIndex == 0)) {
        return;
    }
    if (isScrolling) return;
    isScrolling = true;
    switch (curScrollIndex) {
        case 0:
            if (!isCarSelectDone) {
                ShowCarSelect();
            }
            break;
        case 1:
            if (!isSolatiDone) {
                ShowSolati();
            }
            break;
        case 2:
            if (!isMotoDone && dir == 1) {
                ScrollMoto();
            }
            break;
        case 3:
            if (!isMotoDone) {
                ScrollMoto();
                return;
            }
            break;
    }
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
//모바일버전
function mobileMode() {
    isMobileMode = true;
    let screenHeight = window.innerHeight;
    for(let i = 0; i < arrSection.length; i++){
        arrSection[i].style.height = screenHeight;
        console.log(getComputedStyle(arrSection[i]).height);
    }
    ShowCarSelect();
    ShowSolati();
    ActiveThirdMoto();
    MotoIndex = 2;
    document.body.style.overflowY = "scroll";
}