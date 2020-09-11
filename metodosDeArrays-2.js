var articulos= [ //Array con objetos dentro
    { nombre : "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celqular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];
//Metodo find, ayuda a encontrar algo dentro del articulo, no modifica el array original si no que crea uno nuevo con los valora que quiera encontrar
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" 
 }); // Nuevo array que va a buscar un articulo llamado "Laptop"

 //Metodo forEach Filtrado del array principal sin modificar el principal mientra que muestra cosas.
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})
VM6306:3 Bici
VM6306:3 Television
VM6306:3 Libro
VM6306:3 Celqular
VM6306:3 Laptop
VM6306:3 Teclado
VM6306:3 Audifonos
undefined

//Metodo some regresa validacion que cumpla con la condicion, crea un nuevo array
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})// Simplemente regresa si la condición es falsa o verdadera, no muestra algpun resultado en es pecífico.