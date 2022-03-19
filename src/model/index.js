const mongoose = require("mongoose");
const { connection } = require("../config");
require("./magazine");
require("./book");

const mongo = async () => {
  try {
    await mongoose.connect(connection?.local);
  } catch (err) {
    console.error("Mongo connection error");
  }
};

module.exports = mongo;


