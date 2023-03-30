import { estudiantesRegistrados, nuevoEstudiante, estudiante, editarEstudiante, eliminarEstudiante } from "./functions/funciones.js"


let parametros = process.argv.splice(2)

let funcion = parametros[0]
let datos = parametros.splice(1)


switch (funcion) {
    case "nuevo":
        if (datos.length == 4) {
            try{
                parseInt(datos[3])
                nuevoEstudiante(datos)
            }catch(error){
                console.log(error)
            }
        }else{
            console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 4\nParámetros ingresados: ${datos.length}`)
        }
        break;
    case "registrados":
        if(datos.length == 0){
            try{
                let estudiante = await estudiantesRegistrados()
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 0\nParámetros ingresados: ${datos.length}`))
        }
        break; 
    case "consultar":
        if(datos.length == 1){
            try{
                
                estudiante(datos)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    case "actualizar":
        if(datos.length == 4){
            try{
                parseInt(datos[3])
                editarEstudiante(datos)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    case "eliminar":
        if(datos.length == 1){
            try{
                eliminarEstudiante(datos)
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    default:
    console.log(`Función ${funcion} no existe`)
    break;
}


