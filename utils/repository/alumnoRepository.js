/** @format */
import {conn} from '../database';

export const all = async () => {
	const sql = "SELECT * FROM alumno";
	const result = await conn.query(sql);
	return result.rows;
};

export const findById = async (id) => {

    const sql = "SELECT * FROM alumno WHERE id = $1";
    const result = await conn.query(sql, id);
    return result.rows;
};


export const create = async (data) => {
    const {id, nombre, apellido, user_id} = data;
    const values = [id, nombre, apellido, user_id];
	const sql = "INSERT INTO alumno VALUES ($1,$2,$3,$4) RETURNING *";
	const result = await conn.query(sql, values);
	return result.rows;
};

export const update = async (id, data) => {
    const {nombre, apellido, user_id} = data;
    const values = [nombre, apellido, user_id, id];
    const sql = "UPDATE alumno SET nombre = $1, apellido = $2, user_id = $3 WHERE id = $4 RETURNING *";
    const result = await conn.query(sql, values);
    return result.rows;
};

export const remove = async (id) => {
    const sql = "DELETE FROM alumno WHERE id = $1 RETURNING *";
    const result = await conn.query(sql, id);
    return result.rows;
};