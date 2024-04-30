const carSelectWrap = document.getElementById("carSelectWrap");
const comBtn = document.querySelectorAll("#carBtnWrap a");
const moveBtn = document.querySelectorAll("#carSelect div");
const arrCardWrap = document.getElementsByClassName("carCardWrap");
let curActiveCom = 0;
let curActiveWrap = arrCardWrap[0];
let moveAmount = curActiveWrap.clientWidth / curActiveWrap.childElementCount;
let curMoveIndex = 0;
let maxMoveIndex = curActiveWrap.childElementCount - 1;
let isCarSelectDone = false;
//리사이즈이벤트
window.addEventListener("resize", function(){
    ReSizingCarSelect();
})
//회사버튼클릭시
for(let i = 0; i < comBtn.length; i++){
    comBtn[i].addEventListener("click", function(event){
        event.preventDefault();
        //기존에 활성화되어 있던 차량리스트 비활성화
        curActiveWrap.style.transform = `translateX(0px)`;
        curActiveWrap.style.display = "none";
        //기존에 활성화되어 있던 회사버튼 비활성화
        comBtn[curActiveCom].classList.remove("btnOn");
        curActiveCom = i;
        //클릭된 회사버튼 활성화
        comBtn[curActiveCom].classList.add("btnOn");
        //클릭된 회사의 차량리스트 활성화 및 이동사이즈 등 조정
        curActiveWrap = arrCardWrap[curActiveCom];
        maxMoveIndex = curActiveWrap.childElementCount - 1;
        curMoveIndex = 0;
        curActiveWrap.style.display = "flex";
        moveAmount = curActiveWrap.clientWidth / curActiveWrap.childElementCount;
    });
    if(i != 0){
        arrCardWrap[i].style.display = "none";
    }
}
//좌우버튼등록
for(let i = 0; i < moveBtn.length; i++){
    moveBtn[i].addEventListener("click", function(event){
        MoveCard((i == 0) ? -1 : 1);
        
    });
}
//carSelectWrap 트랜지션지우기
carSelectWrap.addEventListener("transitionend", ()=>{
    carSelectWrap.style.transition = "";
})
function ReSizingCarSelect(){
    curActiveWrap.style.transition = "";
    moveAmount = curActiveWrap.clientWidth / curActiveWrap.childElementCount;
    curActiveWrap.style.transform = `translateX(${-curMoveIndex * moveAmount}px)`;
}
function MoveCard(dir){
    if((curMoveIndex <= 0 && dir == -1) || (curMoveIndex >= maxMoveIndex && dir == 1)){
        return;
    }
    curMoveIndex += dir;
    curActiveWrap.style.transform = `translateX(${-curMoveIndex * moveAmount}px)`;
}
function ShowCarSelect(){
    carSelectWrap.style.opacity = "1";
    carSelectWrap.style.transform = "translateY(0)";
    isCarSelectDone = true;
}