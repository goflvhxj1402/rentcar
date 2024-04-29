# rentcar
ios환경에서 video태그 자동재생 / 전체화면 이슈가 있을 때에는 video태그 안에 playsinline을 사용해주면된다

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

터치이벤트에서 스타트와 앤드에 따라 event속성을 다르게쓴다
