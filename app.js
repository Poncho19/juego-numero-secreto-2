let numeroSecreto = 0;
let rango = 10;

//Titulos
asignarTextoElemento('h1', "Juego del número secreto");//Se le aplica un metodo al objeto titulo
asignarTextoElemento('p', `Indica un numero del 1 al ${rango}`);//Se aplica un metodo al objeto parrafo

//Se genera el numero secreto del juego
numeroSecreto = generarNumeroSecreto(rango);
console.log(numeroSecreto);



//Funcion botones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);    //Objeto al cual se le coloca un texto
    elementoHTML.innerHTML = texto;
    return;                         //Se aplica un texto al elemento HTML
}

function generarNumeroSecreto(rango){
    let numeroAleatorio = parseInt(Math.random()*rango) + 1;
    return numeroAleatorio;
}
