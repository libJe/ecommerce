const express = require("express");
const configs = require("./configs");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const PORT = configs.PORT || 5000;
app.listen(PORT, () => {
  console.log("API server listening on: ", PORT);
});
