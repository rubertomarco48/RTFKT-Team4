document.querySelector("#dropMenu").addEventListener("click", () => {
  if (document.querySelector("#dropdownHomepage").style.display === "flex") {
    document.querySelector("#dropdownHomepage").style.display = "none";
/*     document.querySelector(".videoCardSup__overlay").style.zIndex = "0";
    document.querySelector(".subTitle__video").style.zIndex = "0";
    document.querySelector(".text__video").style.zIndex = "0"; */
  } else {
    document.querySelector("#dropdownHomepage").style.display = "flex";
/*     document.querySelector(".videoCardSup__overlay").style.zIndex = "-1";
    document.querySelector(".subTitle__video").style.zIndex = "-1";
    document.querySelector(".text__video").style.zIndex = "-1"; */
  }
});
