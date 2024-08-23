let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
  
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
}else{
     // si el numero generado esta incluido en la lista
  if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto!");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
