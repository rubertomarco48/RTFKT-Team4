const hamburge = document.querySelector("#hiddenMenu");
hamburge.addEventListener("click", ()=>{
    if(document.querySelector("#mobileMenu").style.display === "block"){
        document.querySelector("#mobileMenu").style.display="none"
    }else{
        document.querySelector("#mobileMenu").style.display="block"
    }
});

