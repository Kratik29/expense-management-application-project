const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Server Running On ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
