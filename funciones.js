const canvas = document.getElementById("juego");
const jugador = document.getElementById("jugador");
const bloque = document.getElementById("bloque1");
const ctx = canvas.getContext("2d");
const x = canvas.width;
const y = canvas.height;

/**
 * Activa las animaciones, llama a la funcion score(), aplica el nombre del jugador y genera un temporizador en canvas desde 3 hasta 1.
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
            score();
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
/**
 * Genera un puntaje en base al tiempo.
 * @method score
 */
function score(){
    let s=0;
    setInterval(function (){
        s++;
        document.getElementById("scoreJuego").innerHTML = s;
        },100)
    return s;
}
/**
 * Cambia el fondo del canvas al seleccionar una de las cuatro opciones mediante switch.
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
 * Cambia el skin del personake al seleccionar en una de las cuatro opciones mediante switch.
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
 * Llama y setea un tiempo de la animacion saltar sobre el jugador.
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
/**
 * Chequea si las teclas ArrowUp o Spaces estan siendo apretadas, de ser asi llama a la funcion saltar().
 * @method keyDownHandler
 */
document.addEventListener("keydown",keyDownHandler, false);
function keyDownHandler(e) {
    if(e.keyCode === 38 || e.keyCode === 32 ) {
        saltar();
    }
}
/**
 * Desactiva la funcion de scroll por default de las teclas Space y ArrowUp.
 */
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
