import { borrarEstudiante, crearEstudiante, modificarEstudiante, mostrarEstudiante } from "./funciones.js"


let parametro = process.argv.splice(2)

let accion = parametro[0]

let datos = parametro.splice(1)

console.log(parametro)

switch (accion) {
    case "nuevo": 
        parseInt(datos[3])
        crearEstudiante(datos)
        break;
    case "mostrar":
        mostrarEstudiante()
    break;
    case "borrar":
        borrarEstudiante(datos)
    break;

    case "modificar":
        modificarEstudiante(datos)
    break;    
    default: 
    console.log('error switch')
        break;
}