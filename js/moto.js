const motoFirstText = document.querySelectorAll("#motoTextWrap p");
const motoFirst = document.getElementById("moto1");
const motoSecond = document.getElementById("moto2");
const motoThird = document.getElementById("moto3");
const motoSpan = document.querySelectorAll("#moto3 dl dd span");
let MotoIndex = 0;
let isMotoActive = false;


function ActiveFirstMoto() {
    motoFirstText[0].style.transform = 'translateY(0)';
    setTimeout(() => {
        motoFirstText[0].style.backgroundColor = 'white';
        setTimeout(() => {
            motoFirstText[1].style.transform = 'translateY(0)';
            setTimeout(() => {
                motoFirstText[1].style.backgroundColor = 'white';
                setTimeout(() => {
                    motoFirstText[2].style.transform = 'translateY(0)';
                    setTimeout(() => {
                        motoFirstText[2].style.backgroundColor = 'white';
                        setTimeout(()=>{
                            MotoIndex++;
                            isMotoActive = false;
                            console.log("DONE");
                            isScrolling = false;
                        }, 500)    
                    }, 1000);
                }, 500);
            }, 1000);
        }, 500);
    }, 1000);
}
function ActiveSecondMoto(){
    motoFirst.style.transform = "rotateY(180deg)";
    motoSecond.style.transform = "rotateY(360deg)";
    setTimeout(()=>{
        ToggleHeaderColor("#191919");
        MotoIndex++;
        isMotoActive = false;
        isScrolling = false;
    }, 1000)
}
function ActiveThirdMoto(){
    motoSecond.style.opacity = "0";
    motoThird.style.opacity = "1";
    ToggleHeaderColor("white");
    setTimeout(()=>{
        for(let i = 0; i < motoSpan.length; i++){
            motoSpan[i].style.backgroundColor = "#3071F2";
        }
        isMotoDone = true;
        isScrolling = false;
    }, 1500)
}
function ScrollMoto(){
    if(isMotoActive) return;
    isMotoActive = true;
    switch (MotoIndex) {
        case 0:
            ActiveFirstMoto();
            break;
        case 1:
            console.log("DNOE2");
            ActiveSecondMoto();
            break;
        case 2:
            ActiveThirdMoto();
            break;
    }
}