import {i} from "./i.js" 
const p = document.getElementsByClassName("testoJs");
/* i.addEventListener("onmouseover",img); */
function img() {
  if (!document.getElementById("img_new")) {
    i[1].style.zIndex = "20";
    let img = document.createElement("img");
    img.src = i[1].attributes.imghover.nodeValue;
    img.id = "img_new";
    img.style.width = "200px";
    img.style.position = "absolute";
    img.style.borderRadius = "1rem";
    img.style.zIndex = "10";
    i[1].appendChild(img);
    i[1].addEventListener("mousemove", (e) => {
      img.style.left = e.clientX -100  + "px";
      img.style.top = e.clientY  -100 + "px";
     });
  }
}
i[1].addEventListener("mouseenter", img);
i[1].addEventListener("mouseout", () => {
  document.getElementById("img_new").remove();
});