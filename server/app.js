const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv");
const db = require("./models");
const saveData = require("./utils/saveData");
const streaminfoRouter = require("./routes/streaminfo");

const app = express();
dotenv.config();

const cors = require("cors");

db.sequelize
  .sync()
  .then(() => {
    console.log("db connect...");
  })
  .catch(console.error);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/streaminfo", streaminfoRouter);
app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(3065, async () => {
  console.log("start server...");
});
