import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
const app = express();

//Middleware
app.use(cors({
  origin: "*",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type,Authorization"}));
app.use(express.json());
app.use(morgan("dev"));

//connectDB
connectDB();

//routes
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
