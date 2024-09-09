const mongoose = require("mongoose");
const color = require("colors");
const connectDB = async () => {
  try {
    const connecti = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(`MongoDB Connect :${connecti.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgGreen.white);
    process.exit();
  }
};

module.exports = connectDB;
