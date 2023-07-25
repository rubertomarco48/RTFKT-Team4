const drop = document.querySelector("#dropMenu");
drop.addEventListener("click", ()=>{
    if(document.querySelector("#dropdownHomepage").style.display === "block"){
        document.querySelector("#dropdownHomepage").style.display="none";
        
   }else{
        document.querySelector("#dropdownHomepage").style.display="block"
        document.querySelector("#dropdownHomepage").style.height="400px"
    }
});



