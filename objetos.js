//Como se lleva un objeto fisico a un paradigma de programacion de objetos en Java Script
var objeto = {
    //los objetos se manejan con propiedades
    // que son: una palabra clave seguido de un valor.
    marca:"Toyota",
    modelo:"4Runner",
    anno: 2016
};
//Forma de traer o buscar cierto valores en específico de un objeto
objeto.marca
"Toyota"

var objeto = {
    //los objetos se manejan con propiedades
    // que son: una palabra clave seguido de un valor.
    marca:"Toyota",
    modelo:"4Runner",
    anno: 2016,
    detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.anno}`)}
};

undefined
objeto.detalleDelAuto()
 Auto 4Runner 2016
//This hace referencia al objeto global, buscando un valor en específico
