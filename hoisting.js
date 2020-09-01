// Las variables y las funcionen declaran antes que se procese cualquier tipo de codigo, solo ocurre en versiones antiguas de js.

var miNombre; //-> declarar e inicializar
miNombre = "Jose";

console.log(miNombre);
var miNombre = "Diego";


//También osurre con las funciones, se llaman antes de declararlas, por buenas prácticas es recomendable declarar las funciones al inicio del código.
hey();
hey() { 
    console.log("hola" miNombre);
}