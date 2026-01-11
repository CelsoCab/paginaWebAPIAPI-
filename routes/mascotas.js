import express from 'express';
import mascotaController from ../controllers/mascotas.js  //este controller estara en controllers
const route = express.Router();

route.post('/');//como estas rutas se refieran a mascota nosotros usamos /, como usamos post
//no es necesario tener un id especifico ya que lo creamos
route.get('/:id');//aqui tenemso una consulta directa, por eso es necesario el id 
route.get('/');
route.put('/:id');//aqui tenemos una modificacion directa, por eso es necesario el id 
route.delete('/:id')////aqui tenemso una consulta a borrar directa, 
// por eso es necesario el id , id es una variable