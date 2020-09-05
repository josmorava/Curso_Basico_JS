//Ciclo donde una tarea se va a repetir hasta cierto punto
//Formas de ciclos(loops) que hay, ejemplo.
var estudiantes = ["Maria","Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//loop for
for(var i=0;i<estudiantes.length; i++ ){
    saludarEstudiantes(estudiantes[i])
}
//El ciclo de saludo se repite hasta lograr saludar a todos los estudiantes dentro del array

//Otra forma de ocupar el for, for of, utilizar una variable en sigular e utilizar las variables de plurar en of
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}