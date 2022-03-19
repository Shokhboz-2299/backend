const PORT = 9000;
const connection = {
  local: "mongodb://localhost:27017/crud",
      // LOCAL 
        // await mongoose.connect('mongodb://localhost:27017/udemy')
        // ATLAS 
        // mongodb+srv://shokhboz:<password>@cluster0.zg2ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

        // MONGODBCOMPAS 
        // mongodb+srv://shokhboz:<password>@cluster0.zg2ed.mongodb.net/test
        
};

module.exports = {
  PORT,
  connection,
};
