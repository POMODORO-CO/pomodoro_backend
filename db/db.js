import { MongoClient } from 'mongodb';

// TODO: use to deploy in heroku
//dotenv.config({ path: './.env' });

//direccion de la base de datos.
const stringConexion = 'mongodb+srv://datausermongus:Phy0WyvSYBQ2NLjg@cluster0.a29am.mongodb.net/test';

//cliente que conecta con mongoClient
const client = new MongoClient(stringConexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



//coneccion con la base de datos para la base de datos pomodoro
let baseDeDatos;
const conectarBD = (callback) => {
    client.connect((err, db) => {
      if (err) {
        console.error('Error conectando a la base de datos');
        return 'error';
      }
      baseDeDatos = db.db('pomodoro');
      console.log('baseDeDatos exitosa');
      return callback();
    });
  };


//obtener la base de datos
  const getDB = () => {
    return baseDeDatos;
  };
  
  export { conectarBD, getDB };