const express = require("express");
const app = express();
const port = 3001;
var cors = require("cors");

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>LALALAND from GET</h1>");
});

app.post("/", (req, res) => {
  res.send("<h1>LALALAND from POST</h1>");
});

app.put("/", (req, res) => {
  res.send("<h1>LALALAND from PUT</h1>");
});

app.delete("/", (req, res) => {
  res.send("<h1>LALALAND from DELETE</h1>");
});
