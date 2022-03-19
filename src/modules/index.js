const express = require("express");
const router = express.Router();

const Magazines = require("./magazines/magazines");
const Books = require("./books/books");

router
  .get("/getMagazines", Magazines.GET)
  .post("/newMagazine", Magazines.POST)
  .put("/updateMagazine", Magazines.PUT)
  .delete("/deleteMagazine", Magazines.DELETE)
  .get("/getBooks", Books.GET)
  .post("/newBook", Books.POST)
  .put("/UpdateBook", Books.PUT)
  .delete("/deleteBook", Books.DELETE);

module.exports = router;