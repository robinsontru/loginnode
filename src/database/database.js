
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "EE", // db name,
  "postgres", // username
  "root", // password
  {
    host: "localhost",
    dialect: "postgres",
    port:"5433"
  
  },
//   conexion.connect( (error)=> {
//     if(error){
//         console.log('El error de conexión es: '+error)
//         return
//     }
//     console.log('¡Conectado a la base de datos !')
// })
)