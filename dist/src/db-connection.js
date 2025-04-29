"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'R6SmashOrPass'
});
function query(text, p0) {
    return pool.query(text);
}
exports.query = query;
;
