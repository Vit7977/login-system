import { Router } from "express";
import { UserController } from "../controllers/user.js";

export const router = Router()

router.post("/", UserController.login);