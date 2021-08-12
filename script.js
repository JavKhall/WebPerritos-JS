var contenedor = document.getElementById("contenedor").addEventListener("click", (e) => {
    let demo = e.target; 

    //al tocar al CENTRO de la Caja de color
    if (demo.classList.contains("imagen")) {
        let imagen = demo;
        let caja = e.target.parentElement;

        if (imagen.classList.contains("clickeado")) {
            efectoSalida (imagen, caja);
        }
        else {
            imagen.classList.remove("imagen_salida");
            setTimeout(()=> {
                efectoEntrada (imagen, caja);
            }, 0);
        }
    }
    //al tocar en las ESQUINAS de la Caja de color
    else if (demo.classList.contains("color")){
        let caja = demo; 
        let imagen = e.target.firstElementChild;        

        if (imagen.classList.contains("clickeado")) {
            efectoSalida (imagen, caja);
        }
        else {
            imagen.classList.remove("imagen_salida");
            setTimeout(()=> {
                efectoEntrada (imagen, caja);
            }, 0);
        }
    } 
});

//Efencto de entrada al tocar la caja
function efectoEntrada (imagen, caja) {
    caja.classList.toggle("color_click");
    imagen.classList.add("imagen_entrada");
    imagen.classList.toggle("clickeado");
}

//Efencto de salida al tocar nuevamete la caja
function efectoSalida (imagen, caja) {
    caja.classList.toggle("color_click");
    imagen.classList.replace("imagen_entrada", "imagen_salida");
    imagen.classList.toggle("clickeado");
}


