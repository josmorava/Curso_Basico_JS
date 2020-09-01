//Funcion: conjunto de tareas al realizar dendo del objeto, para ahcer ciertos pasos o cálculos.

 //Tipos : 
    //DECLARATIVAS
    function miFuncion(){
        return 3;
    }
    miFuncion;

    //EXPRESIÓN o ANÓNIMAS, utilza valores que se expresan fuera de la misma.
        //el parpametro dentro de los paréntesis es aquel dato que se necesita para que al llmar la función esta funcione correctamente.
    var miFuncion = function(a,b){
        return a + b;
    }

    miFuncion();

//Ejemplo:
function sumar(a,b){
    var resultado = a + b;
   return resultado;
   }