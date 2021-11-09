import { ObjectId } from 'mongodb';
import {getDB} from '../../db/db.js';


const buscarUsuarios= ( async (callback)=>{
    const baseDeDatos=getDB();
    console.log("Estoy buscando usuarios");
    await baseDeDatos.collection('usuarios').find({}).limit(50).toArray(callback);
});





export {
    buscarUsuarios

};