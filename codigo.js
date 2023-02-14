let html = document.querySelector(".info-html");
let css = document.querySelector(".info-css");
let js = document.querySelector(".info-js");
let bs = document.querySelector(".info-bootstrap");


function mostrar(elemento){
  if(elemento.getAttribute("hidden") == "true"){
    elemento.removeAttribute("hidden");
  }
  else{
    elemento.setAttribute("hidden","true")
  }
}