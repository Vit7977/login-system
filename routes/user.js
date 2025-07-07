import { Router } from "express";
import { UserController } from "../controllers/user.js";

export const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.addUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
