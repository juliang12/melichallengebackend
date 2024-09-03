import cors from 'cors';
import "dotenv/config"
import morgan from 'morgan';
import routes from './routes/items.js'; // Asegúrate de importar las rutas correctamente
import express from 'express';
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes); // Usa las rutas con el prefijo '/api'

app.listen(4000, () => {
  console.log('Servidor activo en el puerto 4000');
});