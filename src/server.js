const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("./config");
const mongo = require("./model");
const router = require("./modules");

app.use(cors());
app.use(express.json());
app.use("/", router);

mongo()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(PORT));
