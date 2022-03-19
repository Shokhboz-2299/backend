const { Schema, model } = require("mongoose");

const bookSchema = Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  }
});

const books = model("Books", bookSchema);

module.exports = books;
