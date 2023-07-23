
let clip = document.querySelector(".videox");
let playIcon = document.getElementById("play");
console.log(playIcon);
clip.addEventListener("mouseover", function (e) {
  clip.play();
  playIcon.style.display = "none";
});
clip.addEventListener("mouseout", function (e) {
  clip.pause();
  playIcon.style.display = "flex";
});
