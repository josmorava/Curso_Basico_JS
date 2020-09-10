// Lo metodos de los arrays pertmiten recorrer el array principal y acceder a ciertas caracteristicas del mismo creandoc nuevas vaaribles q ue permitan acceder al mimso.

var articulos= [ //Array con objetos dentro
    { nombre : "Bici", costo: 3000},
    { nombre: "Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celqular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];
undefined
//Metodo filter, ayuda a filtrar ciertas cosas, no modifica el arrys original. Genera un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
undefined
articulosFiltrados
(2) [{…}, {…}]
//El metodo filter me ayuda a buscar ciertos parametros dentro de un array lleno de objetos

//-------------------

//Metodo de MAP, me ayuda a mapear el array original
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
}); //Que regrese el nombre de los articulos.
