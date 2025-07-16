import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as UserRouter } from "./routes/user.js";
import { router as Autentication } from "./routes/autenticacao.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/user", UserRouter);
app.use("/user/login", Autentication);

app.listen(PORT, () => {
  console.log(`App open at http://localhost:${PORT}`);
});
