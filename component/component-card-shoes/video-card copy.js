const clip = document.querySelectorAll(".videox");
const playIcon = document.querySelectorAll("#play");

clip.forEach((element,index)=>{
  console.log(index);
  element.addEventListener("mouseover", function (e) {
  element.play();
  playIcon[index].style.display = "none";
});
element.addEventListener("mouseleave", function (e) {
  element.pause();
  playIcon[index].style.display = "flex";
});
})

