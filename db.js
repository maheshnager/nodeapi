const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to db");
});

db.on("error", (err) => {
  console.log(err);
});

module.exports = db;
