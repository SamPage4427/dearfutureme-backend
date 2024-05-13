const { PORT = 3001, NODE_ENV, CONNECTION } = process.env;

const express = require("express");

const app = express();

const mongoose = require("mongoose");

if (NODE_ENV === "production") {
  mongoose.connect(CONNECTION);
} else {
  mongoose.connect("mongodb://127.0.0.1:27017/");
}

app.use(express.json());

app.listen(PORT, () => {
  console.log("Database is connected");
  console.log(`App is listening on port: ${PORT}`);
});
