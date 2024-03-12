//Titulos
asignarTextoElemento('h1', "Juego del número secreto");//Se le aplica un metodo al objeto titulo
asignarTextoElemento('p', "Indica un numero del 1 al 10");//Se aplica un metodo al objeto parrafo




//Funcion botones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);    //Objeto al cual se le coloca un texto
    elementoHTML.innerHTML = texto;                         //Se aplica un texto al elemento HTML
}

function intentoDeUsuario(){
    alert("Click desde el boton");
}
