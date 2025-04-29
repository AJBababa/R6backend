"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
var body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var db = __importStar(require("./db-connection"));
app.get('/operadores', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /operadores.');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = 'SELECT * FROM operador ORDER BY id DESC';
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log('Resultado de la consulta:', db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error('Error al registrar voto:');
                console.error(err_1);
                res.status(500).send('Error interno del servidor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/operadoresMasculinos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /operadores.');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = 'SELECT * FROM operador WHERE genero = \'masculino\' ORDER BY id DESC';
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log('Resultado de la consulta:', db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error('Error al registrar voto:');
                console.error(err_2);
                res.status(500).send('Error interno del servidor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/operadoresFemeninos', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, db_response, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Petición recibida al endpoint GET /operadores.');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                query = 'SELECT * FROM operador WHERE genero = \'femenino\' ORDER BY id DESC';
                return [4 /*yield*/, db.query(query)];
            case 2:
                db_response = _a.sent();
                console.log('Resultado de la consulta:', db_response.rows);
                res.json(db_response.rows);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                console.error('Error al registrar voto:');
                console.error(err_3);
                res.status(500).send('Error interno del servidor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post('/voto', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, operador_id, tipo_voto, query, result, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, operador_id = _a.operador_id, tipo_voto = _a.tipo_voto;
                if (!operador_id) {
                    return [2 /*return*/, res.status(400).send('Falta el operador_id')];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                query = void 0;
                if (tipo_voto === 'smash') {
                    query = "\n          UPDATE operador\n          SET smashes = smashes + 1\n          WHERE id = " + operador_id + "\n          RETURNING id, nombre, smashes, passes;\n        ";
                }
                else if (tipo_voto === 'pass') {
                    query = "\n          UPDATE operador\n          SET passes = passes + 1\n          WHERE id = " + operador_id + "\n          RETURNING id, nombre, smashes, passes;\n        ";
                }
                else {
                    return [2 /*return*/, res.status(400).send('Tipo de voto inválido')];
                }
                return [4 /*yield*/, db.query(query)];
            case 2:
                result = _b.sent();
                if (result.rows.length === 0) {
                    return [2 /*return*/, res.status(404).send('Operador no encontrado')];
                }
                res.json(result.rows[0]);
                return [3 /*break*/, 4];
            case 3:
                err_4 = _b.sent();
                console.error('Error al registrar voto:', err_4);
                res.status(500).send('Error interno del servidor');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
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
var port = process.env.PORT || 3000;
app.listen(port, function () {
    return console.log("App listening on PORT " + port + ".\n\n    ENDPOINTS:\n    \n     - GET /operadores\n     - GET /operadoresRandom\n     - POST /voto\n\n     ");
});
