import {  Pool } from "pg";
import db from "../../env"
const pool = new Pool (db)  
export async function getrusuario (req, res) {
    
const user=await pool.query('select * from "aprendiz"')

    return user.rows
}