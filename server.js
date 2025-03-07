const express = require("express");
const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send(process.env.REACT_APP_hello-world-express, "Goodbye & Hello World!");
});

app.listen(PORT, () => {
  console.log(`haha yes, the server is running on port ${PORT}`);
});
