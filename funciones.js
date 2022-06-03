var canvas = document.getElementById("juego");
var ctx = canvas.getContext("2d");
var x = canvas.width;
var y = canvas.height;

/**
 * Temporizador en lienzo canvas desde 3 hasta 1. Utilizado para indicar al jugador cuando iniciar
 * @method activarReloj
 */
function activarReloj() {
    var i=3;
    var reloj = setInterval(function () {
        canvas.width = canvas.width;
        if(i>0){
            ctx.font = "50px Raleway";
            ctx.fillText(i, (x-25) / 2, y / 2);
        }
        else if(i===0){
            ctx.font = "50px Raleway";
            ctx.fillText("GO", (x-75) / 2, y / 2); }
        else {
            canvas.width = canvas.width;
        }
        i--;
        if (i <= -2) {
            clearInterval(reloj);
        }
    },1000,);
    reloj;
}
/**
 * Cambia el fondo del canvas al seleccionar en una de las opciones
 * @method cambiarFondo
 * @param {string} img - Almacena el valor de la opcion seleccionada por el usuario
 */
function cambiarFondo(img) {
    switch(img) {
        case "gris":
            canvas.style.background = '#eee';
            canvas.style.backgroundSize = '100%';
            break;
        case "desierto":
            canvas.style.background = 'url("imagenes/desierto.jpeg") no-repeat bottom';
            canvas.style.backgroundSize = '250%';
            break;
        case "clasico":
            canvas.style.background = 'url("imagenes/clasico.png") no-repeat bottom';
            canvas.style.backgroundSize = '105%';
            break;
        case "ciudad":
            canvas.style.background = 'url("imagenes/ciudad.png") no-repeat bottom';
            canvas.style.backgroundSize = '130%';
            break;
    }
}

