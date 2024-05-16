const arrSection = document.querySelectorAll("section");
const mobile = document.querySelector("#mobileConfirm");
const mobileBtn = document.querySelector("#mobileConfirm p a")
let scrollAmount = window.innerHeight;
let isScrolling = false;
let maxScrollIndex = arrSection.length;
let curScrollIndex = 0;
let isMotoDone = false;
let firstTouchPos;
let isLoaded = false;
let isMobileActive = false;

mobileBtn.addEventListener("click", function(e){
    console.log(isMobileActive);
    mobile.style.display = "none";
    openFullscreen(document.documentElement);
})
//리로드이벤트
window.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(() => {
        window.scroll(0, 0);
        isLoaded = true;
        mobile.style.display = "flex";
        // if(!isMobileActive && window.innerWidth < 781){
        //     isMobileActive = true;
        //     mobile.style.display = "flex";  
        // }
    }, this.performance.now());
})
//리사이즈이벤트
window.addEventListener("resize", function (event) {
    scrollAmount = window.innerHeight;
    window.scroll(0, curScrollIndex * scrollAmount);
    // if(!isMobileActive && window.innerWidth < 781){
    //     isMobileActive = true;
    //     mobile.style.display = "flex";
    //     console.log("Check");
    // }
});
//스크롤이벤트
window.addEventListener("wheel", function (event) {
    if (!isLoaded) return;
    ScrollSection((event.deltaY > 0) ? 1 : -1);
});
//터치이벤트
window.addEventListener("touchstart", function (event) {
    if (!isLoaded) return;
    firstTouchPos = event.touches[0].pageY;
});
window.addEventListener("touchend", function (event) {
    if (!isLoaded) return;
    let gap = firstTouchPos - event.changedTouches[0].pageY;
    if (gap > -49 && gap < 49) {
        return;
    }
    else if (gap > 50) {
        gap = 1;
    }
    else {
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
            if(!isMotoDone && dir == 1){
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

// 풀 스크린 모드 활성화 함수
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            alert("Cannot enter fullscreen mode: " + err.message);
        });
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen().catch(err => {
            alert("Cannot enter fullscreen mode: " + err.message);
        });
    } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen().catch(err => {
            alert("Cannot enter fullscreen mode: " + err.message);
        });
    }
}