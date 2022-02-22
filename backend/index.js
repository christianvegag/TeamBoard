import express from "express";
import cors from "cors"; //reglas de seguridad
import db from "./db/db.js";
import roleRoutes from "./routes/roleRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv"; //variables de entorno

dotenv.config(); //habilitar el dotenv

const app = express();  //nuestro server js
app.use(express.json()); //reglas del servidor
app.use(cors());
app.use("/api/role", roleRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);


app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
); //donde ejecutar el servidor

db.dbConnection();
