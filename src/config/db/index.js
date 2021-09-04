const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://doan:Ancoi123@cluster0.6zgiz.mongodb.net/product",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
