import { i } from "./i.js";
const p = document.getElementsByClassName("testoJs");
/* i.addEventListener("onmouseover",img); */

function img() {
  if (!document.getElementById("img_new")) {
    i.forEach((element) => {
      element.style.opacity = 0.8;
      element.style.zIndex = 0;
    });
    i[4].style.opacity = 1; 
    i[4].style.zIndex = 20;
    let imag = document.createElement("img")
    imag.setAttribute("id","img_new");
    imag.src = i[4].attributes.imghover.nodeValue;
    imag.setAttribute("style","width:200px ; position : absolute;border-radius:1rem;z-index=10")
    i[4].appendChild(imag);
    i[4].addEventListener("mousemove", (e) => {
      imag.style.left = e.clientX - 100 + "px";
      imag.style.top = e.clientY - 50 + "px";
    });
 
  }

  
}
i[4].addEventListener("mouseenter", img);
i[4].addEventListener("mouseout", () => {
  document.querySelector("#img_new").remove();
  i.forEach((element) => {
    element.style.opacity = 1;
    element.style.zIndex = 0;
  });
});
