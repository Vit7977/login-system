import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export const UserController = {
  async getUsers(req, res) {
    try {
      const result = await User.getUsers();
      if (!result) {
        return res.status(400).json("Error: Users not found!");
      }

      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addUser(req, res) {
    try {
      const { nome, email, senha, data_nasc } = req.body;

      if (!nome || !email || !senha || !data_nasc) {
        return res.status(400).json({ error: "All fields required!" });
      }

      const hashedPass = await bcrypt.hash(senha, 10);

      const data = { nome, email, senha: hashedPass, data_nasc };

      const result = await User.addUser(data);

      return res
        .status(201)
        .json({ message: "User registered successfully!", data: result });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async updateUser(req, res) {
    try {
      const { nome, email, senha, data_nasc } = req.body;
      const id = req.params.id;

      if (!nome || !email || !senha || !data_nasc) {
        return res.status(400).json({ error: "All fields required!" });
      }

      if (!id) {
        return res.status(400).json({ error: "Id required!" });
      }

      const hashedPass = await bcrypt.hash(senha, 10);

      const data = { nome, email, senha: hashedPass, data_nasc, id };

      const result = await User.updateUser(data);

      return res
        .status(200)
        .json({ message: "User updated successfully!", data: result });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteUser(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Id required!" });
      }

      const result = await User.deleteUser(id);

      return res
        .status(200)
        .json({ message: "User deleted successfully", data: result });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
