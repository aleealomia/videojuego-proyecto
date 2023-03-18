var i = 0;
var arr = ["url('./imagenes/slide1.jfif')","url('./imagenes/slide2.jfif')","url('./imagenes/slide3.jfif')","url('./imagenes/slide4.jfif')","url('./imagenes/slide5.jfif')"];
var arrtexto = ["NOS INSPIRAMOS DEL FAMOSO JUEGO DEL DINOSAURIO DE GOOGLE","FUE CODIFICADO EN HTML Y CSS","EN UN FUTUR SE LE CAMBIARA LA ESTÉTICA","SE LE AGREGARÁN MAS NIVELES","PARA QUE DISFRUTEN"]
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

