const querys = require('./sync');
const pelis = require ('../models/movies');

async function Actualizar(){
    try{
        result = await querys.consultaNetflix()
        let datos = result
        if(datos.length > 0){
            await pelis.deleteMany();
            for(let i = 0; i < datos.length; i++){
                let rating = await querys.consultaIMDB(datos[i].id)
                let nueva_peli ={
                    primary_title: datos[i].primaryTitle,
                    runtime: datos[i].runtime,
                    rating: rating[0].Rating
                }

                //* Inserta en Mongo

                await pelis.create(nueva_peli);
            }
            console.log('Actualizacion = '+datos.length)
        } else {
            console.log("El listado de Netflix esta vacio. ")
        }
    } catch(error){
        console.log(error)
    }
}

module.exports = Actualizar;