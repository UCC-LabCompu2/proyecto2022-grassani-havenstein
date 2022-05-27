
var canvas = document.getElementById("juego");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height/2;
var dy = -2;

var personaje = {
    alto: 35,
    ancho: 20,
    dibujar: function () {
        ctx.beginPath();
        ctx.rect(x/3, y, this.ancho, this.alto);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }
};
function dibujar () {
    canvas.width = canvas.width;
  //  if ((y+dy)>10) {
    if(arribaPresionado) {
        y+=dy;
    } else if(y+dy<80) {
        y+=-dy;
    }   // }
    if(abajoPresionado) {
        personaje.alto = 20;
    } else {
        personaje.alto = 35;
    }


    personaje.dibujar();
}
var arribaPresionado = false;
var abajoPresionado = false;

document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 38) {
        arribaPresionado = true;
    }else if(e.keyCode === 40) {
        abajoPresionado = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 38) {
        arribaPresionado = false;
    }else if(e.keyCode === 40) {
        abajoPresionado = false;
    }
}

setInterval(dibujar, 10)

// Se deshabilita scroll con flechas (fuente: https://www.mejorcodigo.com/p/70665.html)
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);


/* PRUEBA REPRESENTANDO TODO CON OBJETOS

var personaje;
var x = canvas.width; //'x' se define como el ancho del canvas
var y = canvas.height; //'y' se define como el alto del canvas

function iniciarJuego() {
    personaje = new cuerpo(35, 20, "black", 50, 120);
    areaJuego.start();
}

var areaJuego = {
    canvas : document.getElementById("juego"),
    start : function () {
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateAreaJuego, 20);
    },
    clear : function () {
        this.context.clearRect(0,0,this.x, this.y)
    }
}

function cuerpo(width, height, color, i, j) {
    this.width = width;
    this.height = height;
    this.j = j;
    this.i = i;
    this.update = function() {
        ctx = areaJuego.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.i, this.j, this.width, this.height);
    }
}

function updateAreaJuego() {
    areaJuego.clear();
    personaje.update();
}*/