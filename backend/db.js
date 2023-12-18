const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    mongoose.connection.on("open", () => console.log("DB Connected"));
  } catch (error) {
    console.log(error);
  }
};
