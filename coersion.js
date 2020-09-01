//Coersiones implícitas - cambio de valores entre números y strings y viceversa dado por el navegador
var a = 4 + "7";
var b = 4 * "7";

//Coerciones explicitas - cambio necesario y donde el usuario obliga a que cambie de valores donde se buca de forma obligatoria. 
var a = 20;
var b = a + "";
var c = String(a); //obligando a que c sea STRING
console.log(c);
var d = Number(c); //obligando a que d sea NUMBER