const i = document.getElementsByClassName("objJavascript");
/* i.addEventListener("onmouseover",img); */
function img() {

    if (document.getElementById("img_new")) {
        return;
    }else{
    let div = document.createElement("div");
    div.id = "img_new";
    div.style["background-color"]= "red";
    div.style.height= "50px";
    div.style.width="50px";
    i[0].appendChild(div)
    }
}