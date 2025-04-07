import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; 
import contactRoutes from "./routes/contactRoutes.js"; 



dotenv.config({ path: "./config/config.env" });

const app = express();


app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST"], 
  credentials: true 
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api", contactRoutes); // Contact route use karna

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
