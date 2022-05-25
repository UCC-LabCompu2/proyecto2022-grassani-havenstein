var canvas = document.getElementById("juego");
var ctx = canvas.getContext("2d");

var x = canvas.width;
var y = canvas.height;

var personaje = {
    alto:35,
    ancho:20,
    dibujar: function () {
        ctx.beginPath();
        ctx.rect(x/6, y/2, this.ancho, this.alto);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
};
function startGame () {
    personaje.dibujar();
}
setInterval(dibujar, 0.1);





