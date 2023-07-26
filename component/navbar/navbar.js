const hamburge = document.querySelector("#hiddenMenu");
hamburge.addEventListener("click", ()=>{document.querySelector("#mobileMenu").style.display="block"}
);
document.querySelector("#iconX").addEventListener("click",()=> {
if(document.querySelector("#mobileMenu").style.display === "block"){
    document.querySelector("#mobileMenu").style.display="none"
}})
