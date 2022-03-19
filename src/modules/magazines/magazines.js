const magazinesModel = require("../../model/magazine");

module.exports = magazine = {
  GET: async (_, res) => {

    const All = await magazinesModel.find();

    res.json({
      status: 200,
      message: "OK",
      data: All,
    });
},

  POST: async (req, res) => {
    const { name, author } = req.body;
    const newMagazine = await magazinesModel.create({name, author});
        res.send(newMagazine)
  },

  PUT: async (req, res) => {
    const { name,author, id } = req.body;

    const updateMagazine = await magazinesModel.findByIdAndUpdate({_id:id}, {name}, {author});
    await updateMagazine.save();

    res.json({
      status: 200,
      message: "OK",
      data: updateMagazine,
    });
  },

  DELETE: async (req, res) => {
    const { id } = req.query;

    const deleteMagazine = await magazinesModel.findByIdAndDelete(id);
    await deleteMagazine.save();

    res.json({
      status: 200,
      message: "OK",
      data: deleteMagazine,
    });
  },
};
