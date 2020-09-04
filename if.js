//Condicionales - IF
    // if - ("condicion, tiene que ser verdad")
if (true) {
    console.log("hola")
} else if {

} else {
    console.log("Soy Falso")
}
//ej:
//Si el usuario es mayor de edad vota.
var edad = 18;
if (edad === 18) {
    console.log("Puedes votar, será tu primera votación")
} else if (edad >18){
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar")
}

//condicion - si es verdad - si no
condition ?  true : false;

var numero = 1; 
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno"

// Reto de juego piedra papel o tijera.
// condicionales: pa gana p - p gana t - t gana pa.
var piedra = 1;
var papel = 2;
var tijera = 3;
var jugadaU;
var jugadaM;

function jugada (jugadaU, jugadaM){
    if (jugadaU != jugadaM){
        //Ganaste
        if (jugadaU===1 && jugadaM ===3){console.log("Ganaste, piedra le gana a tijeras")}
        else if (jugadaU===2 && jugadaM ===1){console.log("Ganaste, papel la gana a la piedra")}
        else if (jugadaU===3 && jugadaM===2){console.log("Ganaste, tijera le gana a papel")}
        //Perdiste
        else if (jugadaU===1 && jugadaM===2){console.log("Perdiste, piedra pierde contra papel")}
        else if (jugadaU===2 && jugadaU===3){console.log("Perdiste, papel pierde contra tijera")} 
        else if (jugadaU===3 && jugadaM===1){console.log("Perdiste, tijera pierde contra la piedra")}
    } else { 
        //Empataste
        return console.log("Esto es un empate")   
    }
}





if (jugadaU === 1, jugadaM === 3){ return console.log("Ganaste, piedra le gana a tijeras")}
else if (jugadaU === 1, jugadaM === 1 ){return console.log("Empate")}
else if (jugadaU === 1, jugadaM === 2) {return console.log ("Perdiste, piedra pierde contra papel")}
//------------
else if (jugadaU === 2, jugadaM === 3){ return console.log("Perdiste, papel pierde contra tijeras")}
else if (jugadaU === 2, jugadaM === 2 ){return console.log("Empate")}
else if (jugadaU === 2, jugadaM === 3) {return console.log ("Ganaste, papel le gana a piedra")}
//------------
else if (jugadaU === 3, jugadaM === 3){ return console.log("Empate")}
else if (jugadaU === 3, jugadaM === 1 ){return console.log("Perdiste, tijeras pierde contra piedra")}
else if (jugadaU === 3, jugadaM === 2) {return console.log ("Ganaste, tijeras le gana a papel")}