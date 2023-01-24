
let feacture = document.querySelector(".li-feacture");
let company = document.querySelector(".li-company");

feacture.addEventListener("click", activar);
company.addEventListener("click", activar1);

function activar() {
    document.querySelector(".ul-feacture").classList.toggle("desactivado");
    document.querySelector(".down").classList.toggle("rotate");
}
function activar1() {
    document.querySelector(".ul-company").classList.toggle("desactivado");
    document.querySelector(".down1").classList.toggle("rotate");

}

let menu_img = document.querySelector(".menu-img");

menu_img.addEventListener("click",()=>{
document.querySelector(".menu").classList.add("menu-active");
document.querySelector(".shadow").classList.toggle("shadow-desactive");
})

let shadow = document.querySelector(".shadow");
let close = document.querySelector(".close");

shadow.addEventListener("click", removeMenu);
close.addEventListener("click", removeMenu);

 
function removeMenu(){
    document.querySelector(".menu").classList.remove("menu-active");
    document.querySelector(".shadow").classList.toggle("shadow-desactive");
    }
    