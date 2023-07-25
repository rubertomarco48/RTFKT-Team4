document.querySelectorAll(".testoJs i").forEach((element) => {
  element.addEventListener("mouseover", () => img(element));
});
document.querySelectorAll(".testoJs i").forEach((element) => {
  element.addEventListener("mouseout", () => rem(element));
});

function img(el) {
  let imag = document.createElement("img");
  imag.setAttribute("id", "img_new");
  setTimeout(()=>{imag.style.width = "70px"
  imag.style.marginLeft ="65px"},75)
  setTimeout(()=>{imag.style.width = "90px"
  imag.style.marginLeft ="55px"},75)
  setTimeout(()=>{imag.style.width = "110px"
  imag.style.marginLeft ="45px"},75)
  setTimeout(()=>{imag.style.width = "130px"
  imag.style.marginLeft ="35px"},75)
  setTimeout(()=>{imag.style.width = "150px"
  imag.style.marginLeft ="25px"},75)
  setTimeout(()=>{imag.style.width = "170px"
  imag.style.marginLeft ="15px"},75)
  setTimeout(()=>{imag.style.width = "190px"
  imag.style.marginLeft ="5px"},75)
  setTimeout(()=>{imag.style.width = "200px"
  imag.style.height = "auto"
  imag.style.marginLeft ="0"},75)
  
  if (!document.getElementById("img_new")) {
    imag.src = el.attributes.imghover.nodeValue;
    el.parentNode.insertBefore(imag, el.nextSibling);
    el.style.opacity="1"
    el.style.zIndex="20";
    el.addEventListener("mousemove", (e) => {
      console.log(e.clientY);
      imag.style.left = e.clientX - 100 + "px";
      imag.style.top = e.clientY - 100 + "px";
    });
  }
}
function rem(el) {
  const imgNew = document.querySelector("#img_new");

  if (imgNew) {
    imgNew.remove();
    el.style.zIndex="0";
  }
}
