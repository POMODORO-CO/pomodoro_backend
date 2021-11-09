
//import express from 'express'
import express from 'express';
const app=express();


//  importaciones de las rutas
import rutasUsuario from './views/usuarios/rutas_usuario.js'

import {conectarBD} from './db/db.js'


app.use(rutasUsuario);

app.use('/',(req,res)=>{
    res.status(200).send('La API funciona')
});





// TODO: hay que crear el archivo process.env
// const main = () => {
//     return app.listen(process.env.PORT, () => {
//       console.log(`escuchando puerto ${process.env.PORT}`);
//     });
//   };
const main = () => {
    return app.listen(4000, () => {
      console.log(`escuchando puerto ${4000}`);
    });
  };



  conectarBD(main);