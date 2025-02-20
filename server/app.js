const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db");
const userRoute = require("./routes/user.route");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/api/user", userRoute);
module.exports = app;
