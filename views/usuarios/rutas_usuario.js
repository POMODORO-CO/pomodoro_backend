import Express from 'express';

import {buscarUsuarios} from '../../controller/usuarios/usuarios.controller.js'

const rutasUsuario = Express.Router();

//callback general para las llamadas
const genercCallback = (res) => (err, result) => {
    if (err) {
      res.status(500).send('Error consultando los usuarios');
    } else {
      res.json(result);
    }
  };
  rutasUsuario.route('/usuario').get((req,res)=>{
      console.log("estoy en lar uta a consultar todos usuarios");
      buscarUsuarios(genercCallback(res))
  })



export default rutasUsuario;