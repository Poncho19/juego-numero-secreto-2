let numeroSecreto = 0;
let rango = 10;
let intentos = 1;               //Cuenta el numero de intentos
let numerosSorteados = [];     //Arreglo que guarda los numeros generados secretos para que no se repitan

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
        //Se activa el boton nuevo juego
        activaBoton();
    }else{
        //Se aumenta el conteo de los intentos
        intentos += 1;
        //Despliega ayuda
        if(numeroDadoUsuario > numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
        //Se limpia el valor en el cuadro de texto
        clearBox();
    }    
    return;
}

function clearBox(){//Funcion que limpia el texto de la caja input
    let limpia = document.querySelector("#valorUsuario");
    limpia.value = "";
    return;
}

function activaBoton(){
    let activar = document.getElementById("reiniciar");
    activar.removeAttribute("disabled");
    return;
}

function reiniciarJuego(){
    let desactivar = document.querySelector("#reiniciar");
    //desactivar boton de nuevo juego
    desactivar.setAttribute("disabled",true);
    //Mostrar mensajes
    asignarTextoElemento('h1', "Juego del número secreto");//Se le aplica un metodo al objeto titulo
    asignarTextoElemento('p', `Indica un numero del 1 al ${rango}`);//Se aplica un metodo al objeto parrafo
    //limpiar caja de texto
    clearBox();
    //reiniciar contador
    intentos = 1;
    //generar numero secreto
    numeroSecreto = generarNumeroSecreto(rango);
    
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);    //Objeto al cual se le coloca un texto
    elementoHTML.innerHTML = texto;                         //Se aplica un texto al elemento HTML
    return;                         
}

function generarNumeroSecreto(rango){//Funcion que genera un numero aleatorio
    let numeroAleatorio = parseInt(Math.random()*rango) + 1;
    console.log(numeroAleatorio);
    console.log(numerosSorteados);
    //Si ya sorteamos todos los numeros
    if(numerosSorteados.length == rango){
        asignarTextoElemento("p","Ya se sortearon todos los numeros que tenemos");
    }else{
        //Se comprueba si esta el numero en el arreglo numerosSorteados
        if(numerosSorteados.includes(numeroAleatorio)){
            //Se genera nuevo número
            numeroAleatorio = generarNumeroSecreto(rango);
            return numeroAleatorio;        
        }else{
            //Se guarda en el arreglo el numero generado
            numerosSorteados.push(numeroAleatorio);
            return numeroAleatorio;
        }
    }   
}
