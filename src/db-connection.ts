import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'R6SmashOrPass'
});

export function query(text: any, p0?: any[]): any {
    return pool.query(text);
};