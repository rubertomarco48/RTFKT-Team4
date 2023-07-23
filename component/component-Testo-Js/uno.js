
    
function img(el) {
  let imag = document.createElement("img");
    imag.setAttribute("id", "img_new");
  if (!document.getElementById("img_new")) {
    imag.src = el.attributes.imghover.nodeValue;
    imag.setAttribute(
      "style",
      "width:200px ; position:absolute; border-radius:1rem; z-index:10 ; visibilty:hidden"
    );
    el.appendChild(imag);
    document.addEventListener("mousemove", (e) => {
      imag.style.left = e.clientX - 100 + "px";
      imag.style.top = e.clientY - 100 + "px";
    });
  }

  el.addEventListener("mouseleave", () => {
    
   const imgNew = document.querySelector("#img_new");
   /* console.log(el); */
   if (imgNew) {
    imgNew.remove();
   }
   
  });
}
document.querySelectorAll(".testoJs i").forEach((element) => {
  element.addEventListener("mouseover",()=> img(element));
});
