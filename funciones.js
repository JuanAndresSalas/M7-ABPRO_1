import pg from 'pg';
const {Pool} = pg

const pool = new Pool ({
    host: "localhost",
    user: "postgres",
    database:"m7abpro1",
    password:"123456789",
    port: 5432
})

export function crearEstudiante(datos){
    pool.query('insert into estudiante (nombre, curso, rut, nivel) values ($1, $2, $3, $4) returning *', datos, (err, res)=>{
        if (err){
            console.log(err);
        }else{
            console.log(`Estudiante ${datos[0]} ingresado con éxito`)
        }
})
}

export function mostrarEstudiante(){
pool.query('SELECT * FROM estudiante;', (err, res)=>{
    if (err){
        console.log(err);
    }else{
        console.table(res.rows)
    }

} )

}

export function borrarEstudiante(datos){
    pool.query('delete from estudiante where rut = $1;', datos, (err, res)=>{
        if (err){
            console.log(err);
        }else{
            console.log(`Registro de estudiante con rut ${datos [0]} fue eliminado`)
        }

    })
        
}

export function modificarEstudiante(datos){
    pool.query('update estudiante set nombre = $1, curso = $2, rut = $3, nivel = $4 where rut like $3 returning *', datos, (err, res)=>{
        if (err){
            console.log(err);
        }else{
            console.table(res.rows)
        }
    } 
    )
    
}