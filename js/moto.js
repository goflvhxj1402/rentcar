const motoFirstText = document.querySelectorAll("#motoTextWrap p");
const motoFirst = document.getElementById("moto1");
const motoSecond = document.getElementById("moto2");
const motoThird = document.getElementById("moto3");
const motoSpan = document.querySelectorAll("#moto3 dl dd span");
let scrollIndex = 0;
let isClicked = false;
window.addEventListener("click", () => {
    if(isClicked) return;
    isClicked = true;
    switch (scrollIndex) {
        case 0:
            ActiveFirstMoto();
            break;
        case 1:
            ActiveSecondMoto();
            break;
        case 2:
            ActiveThirdMoto();
            break;
    }
    
})

function ActiveFirstMoto() {
    motoFirstText[0].style.transform = 'translateY(0)';
    setTimeout(() => {
        motoFirstText[0].style.backgroundColor = 'white';
        motoFirst.style.backgroundImage = "url(./img/anger1.png)";
        setTimeout(() => {
            motoFirstText[1].style.transform = 'translateY(0)';
            setTimeout(() => {
                motoFirstText[1].style.backgroundColor = 'white';
                motoFirst.style.backgroundImage = "url(./img/anger2.png)";
                setTimeout(() => {
                    motoFirstText[2].style.transform = 'translateY(0)';
                    setTimeout(() => {
                        motoFirstText[2].style.backgroundColor = 'white';
                        motoFirst.style.backgroundImage = "url(./img/anger3.png)";
                        setTimeout(()=>{
                            scrollIndex++;
                            isClicked = false;
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
        scrollIndex++;
        isClicked = false;
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
    }, 1000)
}