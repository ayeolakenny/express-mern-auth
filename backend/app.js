require("dotenv").config();
const cors = require("cors");
const express = require("express");
const dbConnection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//DB
dbConnection();

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port: ${port}`));
