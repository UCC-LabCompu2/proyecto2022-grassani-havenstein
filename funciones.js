const canvas = document.getElementById("juego");
const jugador = document.getElementById("jugador");
const bloque = document.getElementById("bloque1");
const ctx = canvas.getContext("2d");
const x = canvas.width;
const y = canvas.height;

/**
 * Genera un temporizador sobre lienzo canvas desde 3 hasta 1. Utilizado para indicar al jugador cuando iniciar.
 * @method activarJuego
 */
function activarJuego() {
    let i=3;
    let nombre = document.getElementsByName("nombre")[0].value;
    document.getElementById("nombreJuego").innerHTML = nombre;
    let reloj = setInterval(function () {
    document.getElementById("botonJugar").disabled = true;
    canvas.width = canvas.width;
        if(i>0){
            ctx.font = "50px Raleway";
            ctx.fillText(i, (x-25) / 2, y / 2);
            if(i===2){
                const bloque = document.getElementById("bloque1");
                bloque.style.animationPlayState = 'running';
            }
        }
        else if(i===0){
            ctx.font = "50px Raleway";
            ctx.fillText("GO", (x-75) / 2, y / 2)
        }
        else {
            canvas.width = canvas.width;
        }
        if (i <= -1) {
            clearInterval(reloj);
        }
        i--;
    },1000);
    if(nombre === ""){
        alert("Debe ingresar un nombre para inicar el juego.");
        clearInterval(reloj);
        canvas.width=canvas.width;
    }else {
        reloj;}
}
function score(){
    let s=-50;
    setInterval(function (){
        s++;
        if(s>=0) {
           document.getElementById("scoreJuego").innerHTML = s;
        }
        },100)
    return s;
}
/**
 * Cambia el fondo del canvas al seleccionar en una de las opciones
 * @method cambiarFondo
 * @param {string} img - Almacena el valor de la opcion seleccionada de fondo por el usuario
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
/**
 * Cambia el skin del personake al seleccionar en una de las opciones
 * @method cambiarSkin
 * @param {string} skin - Almacena el valor de la opcion seleccionada de skin por el usuario
 */
function cambiarSkin(skin) {
    switch(skin) {
        case "dinosaurio":
            jugador.style.background = 'url("imagenes/dino.png")';
            jugador.style.backgroundSize = '70px';
            break;
        case "shrek":
            jugador.style.background = 'url("imagenes/shrek.png")';
            jugador.style.backgroundSize = '70px';
            break;
        case "perro":
            jugador.style.background = 'url("imagenes/perroSalchicha.png")';
            jugador.style.backgroundSize = '70px';
            break;
        case "mikeWazowski":
            jugador.style.background = 'url("imagenes/mikeWazoski.png")';
            jugador.style.backgroundSize = '80px';
            break;
    }
}
/**
 *
 * @method saltar
 */
function saltar() {
    if(jugador.classList !== "salto"){
        jugador.classList.add("salto")
    }
    setTimeout(function (){
        jugador.classList.remove("salto");
    },500)
}

const checkChoque = setInterval(function (){
    let jugadorTop = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
    let bloqueLeft = parseInt(window.getComputedStyle(bloque).getPropertyValue("left"));
    if (bloqueLeft<140 && bloqueLeft>100 && (jugadorTop >= 200 || jugadorTop <= 140)){
        bloque.style.animation = "none";
        bloque.style.display = "none";
        alert("GAME OVER!");
        window.location.reload();
    }
})
var arribaPresionado = false;
var abajoPresionado = false;
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 38 || e.keyCode === 32 ) {
        arribaPresionado = true;
        saltar();
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 38 || e.keyCode === 32 ) {
        arribaPresionado = true;
    }else if(e.keyCode === 40) {
        abajoPresionado = false;
    }
}
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
