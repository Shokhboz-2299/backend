const booksModel = require("../../model/book");

module.exports = books = {
  
  GET: async (_, res) => {

      const All = await booksModel.find();

      res.json({
        status: 200,
        message: "OK",
        data: All,
      });
  },

  POST: async (req, res) => {
    const { title, author } = req.body;
    const books = await booksModel.find();
    const newBook = await new booksModel({ title, author });
    books.push(newBook);
    await newBook.save();

    res.json({
      status: 200,
      message: "OK",
      data: newBook,
    });
  },

  PUT: async (req, res) => {
    const { title, id, author } = req.body;

    const updateBook = await booksModel.findByIdAndUpdate({_id:id}, {title}, {author});
    await updateBook.save();

    res.json({
      status: 200,
      message: "OK",
      data: updateBook,
    });
  },

  DELETE: async (req, res) => {
    const { _id } = req.query;

    const deleteBook = await booksModel.findByIdAndRemove(_id);
    await deleteBook.save();

    res.json({
      status: 200,
      message: "OK",
      data: deleteBook,
    });
  },
};
