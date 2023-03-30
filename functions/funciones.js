import pg from "pg"
import dotenv from "dotenv"
const {Pool} = pg

dotenv.config()




const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER
})

export function nuevoEstudiante(datos){
    pool.query(`insert into  estudiante(nombre,rut,curso,nivel) values($1,$2,$3,$4);`,datos,(error, res) =>{
        if(error){
            throw error
        }else{
            console.log( "Estudiante ingresado con éxito")
        }
    })
    pool.end
}

export function estudiantesRegistrados(){
    pool.query(`select * from estudiante`,(error, res) =>{
        if(error){
            throw error
        }else{
            console.log("Estudiantes:")
            console.table(res.rows)
        }
    })
    pool.end
}

export function estudiante(datos){
    pool.query(`select * from estudiante where rut like $1`,datos,(error, res) =>{
        if(error){
            throw error
        }else{
            if (res.rows.length == 0) {
                console.log("Estudiante no existe")
            } else {
                console.table(res.rows)
            }
        }
    })
    pool.end
}

export  function editarEstudiante(datos){
    pool.query(`UPDATE estudiante SET curso = $3, nivel = $4 WHERE rut like $2 or nombre like $1;`,datos,(error, res) =>{
        if(error){
            throw error
        }else{
            console.log(`Estudiante rut: ${datos[2]} ha sido modificado con éxito`)
        }
    })
    
    pool.end
}
export  function eliminarEstudiante(datos){
    pool.query(`DELETE FROM estudiante WHERE rut like $1 ;`,datos,(error, res) =>{
        if(error){
            throw error
        }else{
            console.log(`Estudiante rut: ${datos[0]} ha sido eliminado`)
        }
    })
    
    pool.end
}

