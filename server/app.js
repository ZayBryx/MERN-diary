require("express-async-errors");
require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const errorHandler = require("./middleware/error-handler");
const connectDB = require("./utils/connectDB");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

const diaryRoute = require("./routes/diaryRoutes");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use("/api/v1/diary", diaryRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB(DB_URI);
  console.log(`Listening on Port:${PORT}`);
});
