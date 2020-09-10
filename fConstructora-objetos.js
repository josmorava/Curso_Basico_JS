//Método para crear un grupo de objetos de una forma más automática y así no estar creando u*u
function auto(marca,modelo,annio){
    this.marca = marca; 
    this.modelo = modelo;
    this.año = annio;
}

//Funcion constructora
function auto (marca, modelo, annio){
    this.marca = marca; //Haciendo referencia al objeto pactadole que se guardara en la propiedad 'marca'
    this.modelo = modelo;
    this.annio = annio;
} //Template de nos nuevos objetos
undefined
var autoNuevo = new auto("Tesla", "Medel 3", 2020) //genera una nueva instancia en la funcion constructora, lo que quiere decir que crea un nuevo obejto partiendo de otro objeto, en este caso ese objeto es lña funcion constructora auto.
undefined
var autoNuevo2 = new auto("Tesla","Model X",2018)
var autoNuevo3 = new auto("Toyota","Corola",2020)
undefined
autoNuevo2
auto {marca: "Tesla", modelo: "Model X", annio: 2018}
autoNuevo3
auto {marca: "Toyota", modelo: "Corola", annio: 2020}

//Funcion contructora de 30 carros de forma automatica con loops y funcion constructora

function auto(marca, modelo, annio){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}
//Crear array donde se van a guardar los nu
var autos = [];
//ciclo donde se agreguen los autos al array
for (i=0; i<5; i++){
    var marca = prompt("Marca?")//Introducir un dato
    var modelo = prompt("Modelo?")
    var annio = prompt("Año?")
    autos.push(new auto(marca,modelo,annio))
}
//Ciclo para mostrar la longitud de autos agendados
for(i=0; i<autos.length;i++){
    console.log(autos[i])
}
