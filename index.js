const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categoryRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", serviceRoutes);

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on port ${PORT}`));
