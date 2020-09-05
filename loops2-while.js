var estudiantes = ["Maria", "Sergio","Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`)
}
//Loops while, mientras lo que esté dentro sea verdad va a pasar lo siguiente
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift(); // va a ir eliminando elementos del array
    saludarEstudiantes(estudiante);
}