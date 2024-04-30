const solati = document.getElementById("solatiInfo");
let isSolatiDone = false;

solati.addEventListener("transitionend", ()=>{
    solati.style.transition = "";
})
function ShowSolati(){
    solati.style.opacity = "1";
    solati.style.transform = "translateY(0)";
    isSolatiDone = true;
}