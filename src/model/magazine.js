const { Schema, model } = require("mongoose");

const magazineSchema = Schema({
  name: {
    type: String,
  },
  author: {
    type: String,
  }
});

const magazines = model("Magazines", magazineSchema);

module.exports = magazines;
