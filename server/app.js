const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const streaminfoRouter = require("./routes/streaminfo");
const onairdayRouter = require("./routes/onairdate");
const SaveData = require("./utils/saveData");

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
    origin: "http://localhost:3001",
  })
);

app.use("/api/streaminfo", streaminfoRouter);
app.use("/api/onairday", onairdayRouter);
app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(3065, async () => {
  console.log("start server...");
});
