import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connection';






app.get('/operadores', async (req, res) => {
    console.log('Petición recibida al endpoint GET /operadores.');

    try {
        let query = 'SELECT * FROM operador ORDER BY id DESC';
        let db_response = await db.query(query);

        console.log('Resultado de la consulta:', db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error('Error al registrar voto:');
        console.error(err);
      
        res.status(500).send('Error interno del servidor');
      }
});
app.get('/operadoresMasculinos', async (req, res) => {
    console.log('Petición recibida al endpoint GET /operadores.');

    try {
        let query = 'SELECT * FROM operador WHERE genero = \'masculino\' ORDER BY id DESC';
        let db_response = await db.query(query);

        console.log('Resultado de la consulta:', db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error('Error al registrar voto:');
        console.error(err);
      
        res.status(500).send('Error interno del servidor');
      }
});
app.get('/operadoresFemeninos', async (req, res) => {
    console.log('Petición recibida al endpoint GET /operadores.');

    try {
        let query = 'SELECT * FROM operador WHERE genero = \'femenino\' ORDER BY id DESC';
        let db_response = await db.query(query);

        console.log('Resultado de la consulta:', db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error('Error al registrar voto:');
        console.error(err);
      
        res.status(500).send('Error interno del servidor');
      }
});



app.post('/voto', async (req, res) => {
    let { operador_id, tipo_voto } = req.body;
  
    if (!operador_id) {
      return res.status(400).send('Falta el operador_id');
    }
  
    try {
      let query;
  
      if (tipo_voto === 'smash') {
        query = `
          UPDATE operador
          SET smashes = smashes + 1
          WHERE id = ${operador_id}
          RETURNING id, nombre, smashes, passes;
        `;
      }
      else if (tipo_voto === 'pass') {
        query = `
          UPDATE operador
          SET passes = passes + 1
          WHERE id = ${operador_id}
          RETURNING id, nombre, smashes, passes;
        `;
      } else {
        return res.status(400).send('Tipo de voto inválido');
      }
  
      const result = await db.query(query);
  
      if (result.rows.length === 0) {
        return res.status(404).send('Operador no encontrado');
      }
  
      res.json(result.rows[0]);
  
    } catch (err) {
      console.error('Error al registrar voto:', err);
      res.status(500).send('Error interno del servidor');
    }
  });
  
  
  








/*app.post('/alumno', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /alumno. Body: ${JSON.stringify(req.body)}`);

    try {
        let new_student = {
            id: req.body.id,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            grade: req.body.grade
        }

        console.log(`Alumno a añadir: ${JSON.stringify(new_student)}`);

        let query = `INSERT INTO alumnos
        VALUES ('${new_student.id}', '${new_student.name}', '${new_student.surname}', ${new_student.age}, '${new_student.grade}')`;
        let db_response = await db.query(query);

        console.log(db_response);

        if(db_response.rowCount == 1){
            res.json(`El registro ha sido creado correctamente.`);
        } else{
            res.json(`El registro NO ha sido creado.`);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/alumnos', async (req, res) => {
    console.log('Petición recibida al endpoint GET /alumnos.');

    try {
        let query = 'SELECT * FROM alumnos';
        let db_response = await db.query(query);

        console.log('Resultado de la consulta:', db_response.rows);

        res.json(db_response.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/alumno/eliminar', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /alumno/eliminar con ID: ${req.body.id}`);

    try {
        let query = `DELETE FROM alumnos WHERE id = '${req.body.id}'`;
        let db_response = await db.query(query);

        console.log(db_response);

        if (db_response.rowCount == 1) {
            res.json({ message: 'Alumno eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Alumno no encontrado' });
        }

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



app.get('/user/:email', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /user/:email.`);
    console.log(`Parámetro recibido por URL: ${req.params.email}`);

    try{
        let query = `SELECT * FROM usuarios WHERE id='${req.params.email}'`;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Usuario encontrado: ${db_response.rows[0].id}`);
            res.json(db_response.rows[0]);   
        } else{
            console.log(`Usuario no encontrado.`)
            res.json(`User not found`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/productos', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /productos.`);

    try{
        let query = `SELECT * FROM productos ORDER BY precio ASC`;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Numero de productos encontrados: ${db_response.rows.length}`);
            res.json(db_response.rows);   
        } else{
            console.log(`No se han encontrado productos`)
            res.json(`No se han encontrado productos`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/productos/deuda', async (req, res) => {
    console.log(`Petición recibida al endpoint GET /productos/deuda.`);

    try{
        let query = `SELECT * FROM pagos WHERE is_paid = false ORDER BY fecha_comprado DESC`;
        let db_response = await db.query(query);

        if(db_response.rows.length > 0){
            console.log(`Numero de productos encontrados: ${db_response.rows.length}`);
            res.json(db_response.rows);   
        } else{
            console.log(`No se han encontrado productos`)
            res.json(`No se han encontrado productos`);
        }

    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/user', jsonParser, async (req, res) => {

    console.log(`Petición recibida al endpoint POST /user. 
        Body: ${JSON.stringify(req.body)}`);

    try {
        
        let query = `INSERT INTO usuarios VALUES ('${req.body.id}', '${req.body.nombre}');`; 
        let db_response = await db.query(query);

        console.log(db_response);

        if(db_response.rowCount == 1){
            res.json(`El registro ha sido creado correctamente.`);
        } else{
            res.json(`El registro NO ha sido creado.`);
        }
    
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/producto/compra', jsonParser, async (req, res) => {

    console.log(`Petición recibida al endpoint POST /producto/compra. 
        Body: ${JSON.stringify(req.body)}`);

    try {

        let nuevo_producto = {
            id_usuario : req.body.id_usuario,
            id_producto : req.body.id_producto,
            is_paid : false,
            fecha_comprado : new Date().toISOString().split('T')[0]
        }

        console.log(`Producto a añadir: ${nuevo_producto}`)

        let query = `INSERT INTO pagos (id_usuario, id_producto, is_paid, fecha_comprado) 
        VALUES ('${nuevo_producto.id_usuario}',${nuevo_producto.id_producto},'${nuevo_producto.is_paid}','${nuevo_producto.fecha_comprado}' );`; 
        let db_response = await db.query(query);

        console.log(db_response);

        if(db_response.rowCount == 1){
            res.json(`El registro ha sido creado correctamente.`);
        } else{
            res.json(`El registro NO ha sido creado.`);
        }
    
    }catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/productos/pagar2', async (req, res) => {
    console.log(`Petición recibida al endpoint POST /productos/pagar2.`);

    try {
        let query = `UPDATE pagos SET is_paid = true`;
        let db_response = await db.query(query);

        console.log(`Número de registros actualizados: ${db_response.rows.length}`);

        if (db_response.rowCount > 0) {
            res.json(`Se han actualizado ${db_response.rows.length} registros.`);
            res.json(db_response.rows); 
        } else {
            res.json(`No hay productos pendientes de pago.`);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/productos/pagar', async (req, res) => {
    console.log(`Petición recibida al endpoint POST /productos/pagar.`);

    try {

        let update_product = {
            id_usuario : req.body.id_usuario,
            id : req.body.id,
            is_paid : true,
            pecha_pago: new Date().toISOString().split('T')[0]
        }

        console.log(`Producto pagado: ${JSON.stringify(update_product)}`);

        let query = `UPDATE pagos SET is_paid = true`;
        let db_response = await db.query(query);

        if (db_response.rowCount > 0) {
            res.json(`Se han actualizado ${db_response.rows.length} registros.`);
            res.json(db_response.rows); 
        } else {
            res.json(`No hay productos pendientes de pago.`);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/perfil', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /perfil. 
        Body:${JSON.stringify(req.body)}`);
    try {
        
        let query = `INSERT INTO alumnos (name, email, img) 
        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);
        
        res.json(`El registro del señor/a ${req.body.nombre} ${req.body.apellidos}, con domicilio ${req.body.direccion},
             y color de pelo ${req.body.color_pelo} ha sido creado.`);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/suma/:valor1/:valor2', (req, res) => {
    let resultado: number = 0;
    resultado = Number(req.params.valor1) + Number(req.params.valor2);
    console.log("resultado: " + resultado);
    res.send(String(resultado));
});*/

/*app.post('/futbolistas', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /futbolistas. 
        Body:${JSON.stringify(req.body)}`);
    try {
        let query = `INSERT INTO alumnos (name, email, img) 
        VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});*/

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINTS:
    
     - GET /operadores
     - GET /operadoresRandom
     - POST /voto

     `));