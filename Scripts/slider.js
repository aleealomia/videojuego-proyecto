var i = 0;
var arr = ["url('imagenes/1.png')","url('imagenes/2.png')","url('imagenes/3.png')"];
var arrtexto = ["imagen1","Imagen2","Imagen3"]
function prevf(){
    
    if (i > 0) {
        i--;
    }
    else {
        i = arr.length-1;
    }
    slider.style.backgroundImage = arr[i] ;
    textoAbajo.innerText = arrtexto[i];

    console.log(arr[i])
}
function nextf(){
    if (i < arr.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    slider.style.backgroundImage = arr[i];
    textoAbajo.innerText = arrtexto[i];
    console.log(arr[i])
}
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slider = document.querySelector(".slider-img");
var textoAbajo = document.getElementById("textoabajo")
prev.addEventListener("click",prevf);
next.addEventListener("click",nextf);

prevf();
nextf();
