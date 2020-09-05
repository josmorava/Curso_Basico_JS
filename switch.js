//Condicional hecho a partir de casos
var numero= 1;
switch(numero){
    case 1:
        console.log("Soy uno!")
        break;//detiene switch
    case 10:
        console.log("Soy diez")
        break;
    case 100:
        console.log("Soy cien")
        break;
    default: 
        console.log("No soy nada")
}
//El break es importante es cada caso.

//Reto: juego de piedra, papel y tijeras con switch., ejemplo hecho pero no funcionó.

var piedra = 1
var papel = 2
var tijera = 3
var jugadaU
var jugadaM
switch (jugadaU, jugadaM) {
    case (1 && 3):
        console.log("Ganaste,piedra gana a tijeras")
        break;
    case (2 && 1):
        console.log("Ganaste,papel gana a pidra")
        break;
    case (3 && 2):
        console.log("Ganaste,tijera gana a papel")
        break;
    case (1 && 2):
        console.log("Perdiste,piedra pierde contra papel")
        break;
    case (2 && 3):
        console.log("Perdiste,papel pierde contra tijeras")
        break;
    case (3 && 1):
        console.log("Perdiste,tijeras pierde contra piedra")
        break;
    case jugadaU === jugadaM:
        console.log("Empate")
    default:
        console.log("Jugada no valida")
        break;
}

//Reto lugo de ver ejemplos:
var piedra = 1
var papel = 2
var tijeras =3
var jugadaU
var jugadaM
function jugada(jugadaU, jugadaM){
    switch (true) {
        //Ganar
        case jugadaU===1 && jugadaM===3:
            console.log("Ganaste, piedra le gana a tijera")
            break;
        case jugadaU===2 && jugadaM===1:  
            console.log("Ganaste, papel le gana a piedra")
            break;
        case jugadaU===3 && jugadaM===2:
            console.log("Ganaste, tijera le gana a papel")
            break;
        //Perder
        case jugadaU===1 && jugadaM===2:
            console.log("Perdiste, piedra pierde contra papel")
            break;
        case jugadaU===2 && jugadaM===3:
            console.log("Perdiste, papel pierde contra tijera")
            break;
        case jugadaU===3 && jugadaM===1:
            console.log("Perdiste, tijera pierde contra piedra")
            break;
        //Empatar
        case jugadaU === jugadaM:
            console.log("Empate")
            break;
        default:
            console.log("Jugada no valida")
        break;
    }
}