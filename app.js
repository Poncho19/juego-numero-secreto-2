let numeroSecreto = 0;
let rango = 10;
let intentos = 1;     //Cuenta el numero de intentos

//Titulos
asignarTextoElemento('h1', "Juego del número secreto");//Se le aplica un metodo al objeto titulo
asignarTextoElemento('p', `Indica un numero del 1 al ${rango}`);//Se aplica un metodo al objeto parrafo

//Se genera el numero secreto del juego
numeroSecreto = generarNumeroSecreto(rango);




//Funcion botones
function verificarIntento(){
    //Captura el valor dado por el usuario en la caja de texto
    let numeroDadoUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDadoUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1)? "intento":"intentos"}`);
    }else{
        //Se aumenta el conteo de los intentos
        intentos += 1;
        //Despliega ayuda
        if(numeroDadoUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
    }    
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);    //Objeto al cual se le coloca un texto
    elementoHTML.innerHTML = texto;                         //Se aplica un texto al elemento HTML
    return;                         
}

function generarNumeroSecreto(rango){
    let numeroAleatorio = parseInt(Math.random()*rango) + 1;
    return numeroAleatorio;
}
