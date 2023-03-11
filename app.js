const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongo:2018:27017/test")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error in DB connection!");
  });

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({ data: "Hello World!" });
});
app.listen(4000, () => {
  console.log("Running on port 4000");
});
