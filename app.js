let titulo = document.querySelector('h1');    //Objeto al cual se le coloca un texto
let parrafo = document.querySelector('p');

//Titulos
titulo.innerHTML = "Juego del numero secreto"; //Se le aplica un metodo al objeto titulo
parrafo.innerHTML = "Indica un numero del 1 al 10"; //Se aplica un metodo al objeto parrafo

//Funcion botones
function intentoDeUsuario(){
    alert("Click desde el boton");
}
