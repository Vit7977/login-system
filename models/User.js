import { pool } from "../db/pool.js";

export const User = {
  async getUsers() {
    try {
      const users = await pool.promise().execute(`SELECT * FROM usuario`);
      return users[0];
    } catch (error) {
      throw error;
    }
  },
  async addUser(data) {
    try {
      const newUser = await pool
        .promise()
        .execute(
          `INSERT INTO usuario (nome, email, senha, data_nasc) VALUES (?,?,?,?)`,
          [data.nome, data.email, data.senha, data.data_nasc]
        );
      return newUser;
    } catch (error) {
      throw error;
    }
  },
  async updateUser(data) {
    try {
      const updatedUser = await pool
        .promise()
        .execute(
          `UPDATE usuario SET nome = ?, email = ?, senha = ?, data_nasc = ? WHERE id = ?`,
          [data.nome, data.email, data.senha, data.data_nasc, data.id]
        );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  },
  async deleteUser(id) {
    try {
      const result = await pool
        .promise()
        .execute(`DELETE FROM usuario WHERE id=?`, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  },
};
