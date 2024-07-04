const express = require("express");
const db = require("./db");
const router = require("./routes/users.js");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// app.get("", (req, res) => {
//   res.send("Hello World");
// });
app.use(express.json());
app.use(cors());
app.use("/users", router);

app.listen(PORT, (req, res) => {
  console.log("Server connected......");
});
