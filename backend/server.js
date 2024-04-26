import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(PORT, () => console.log(`server is running: ${PORT}`));
