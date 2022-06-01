// Dinamica
var jugador = document.getElementById("jugador");
var bloque = document.getElementById("bloque1");
function saltar() {
    if(jugador.classList !== "salto"){
    jugador.classList.add("salto")
    }
    setTimeout(function (){
        jugador.classList.remove("salto");
    },500)
}
function agachar() {
    if(jugador.classList !== "agachado"){
        jugador.classList.add("agachado")
    }
    setTimeout(function (){
        jugador.classList.remove("salto");
    },500)
}
var checkChoque = setInterval(function (){
    var jugadorTop = parseInt(window.getComputedStyle(jugador).getPropertyValue("top"));
    var bloqueLeft = parseInt(window.getComputedStyle(bloque).getPropertyValue("left"));
    if (bloqueLeft<140 && bloqueLeft>100 && (jugadorTop >= 200 || jugadorTop <= 140)){
        bloque.style.animation = "none";
        bloque.style.display = "none";
        alert("GAME OVER");
    }
})

// Controles
var arribaPresionado = false;
var abajoPresionado = false;

document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode === 38 || e.keyCode === 32 ) {
        arribaPresionado = true;
        saltar();
    }else if(e.keyCode === 40) {
        abajoPresionado = true;
        agachar();
    }
}
function keyUpHandler(e) {
    if(e.keyCode === 38 || e.keyCode === 32 ) {
        arribaPresionado = true;
    }else if(e.keyCode === 40) {
        abajoPresionado = false;
    }
}
// Se deshabilita scroll con flechas (fuente: https://www.mejorcodigo.com/p/70665.html)
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//Configuracion
function activarJuego() {
    const bloque = document.getElementById("bloque1");
    bloque.style.animationPlayState = 'running';
    //setInterval() generar un avance de dificultar, que cada x segundos la animacion acelere
}
// Ver forma de cambiar fondos
// Ver forma de cambiar personaje
// Ver forma de generar score

