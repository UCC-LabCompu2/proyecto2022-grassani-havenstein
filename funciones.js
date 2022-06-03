/**
 * Temporizador en lienzo canvas desde 3 hasta 1. Utilizado para indicar al jugador cuando iniciar
 * @method activarReloj
 */
function activarReloj() {
    var canvas = document.getElementById("juego");
    var ctx = canvas.getContext("2d");
    var x = canvas.width;
    var y = canvas.height;
    var i=3;
    var reloj = setInterval(function () {
        canvas.width = canvas.width;
        if(i>0){
            ctx.font = "50px Raleway";
            ctx.fillText(i, (x-25) / 2, y / 2);
        }
        else if(i===0){
            ctx.font = "50px Raleway";
            ctx.fillText("GO", (x-50) / 2, y / 2); }
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


