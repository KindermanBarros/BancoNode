import mysql from 'mysql2/promise';
import { config } from '../config/config.js';

export async function getAllUsers() {
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.query('SELECT * FROM `aluno`');
  return rows;
}

export async function createAnUser(id, nome, idade, email, senha) {
  const connection = await mysql.createConnection(config);
  const sql =
    'INSERT INTO `aluno` (`id`, `nome`, `idade`, `email`, `senha`) VALUES (?, ?, ?, ?, ?)';
  const values = [id, nome, idade, email, senha];
  await connection.execute(sql, values);
}

export async function updateAnUser(id, nome) {
  const connection = await mysql.createConnection(config);
  const sql = 'UPDATE `aluno` SET `nome` = ? WHERE `id` = ?';
  const values = [nome, id];
  await connection.execute(sql, values);
}

export async function deleteAnUser(id) {
  const connection = await mysql.createConnection(config);
  const sql = 'DELETE FROM `aluno` WHERE `id` = ?';
  const values = [+id];
  await connection.execute(sql, values);
}
