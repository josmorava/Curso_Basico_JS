//Valor tipo objeto que guarda subvalores dentro de el, forma de generar una estructura de datos. Se conoce también como lista de datos.
var frutas = [
    "Manzanas", 
    "Peras",
    "Platanos",
    "Ceresas"];
    //Empiezan las posiciones desde 0, OJO

    var frutas = ["Manzanas", "Peras", "Platanos"];
    //Método para agregar más valores al arrays de último lugar
    var masFrutas = frutas.push("Uvas");
    undefined

//Metodo para quitar valor de un arrays
var ultimo = frutas.pop("Uvas")

//Metodo para agregar un elemento a un arrays de primer lugra a diferencia de push que lo agg de último
var nuevaLongitud = frutas.unshift("Uvas")

//Metodo para eliminar el primer elemento de un array
var borraFruta = frutas.shift("Uvas")

//Ayudar a saber la posicion del elemento que le pasemos de un array
var posicion = frutas.indexOf("Manzanas")

