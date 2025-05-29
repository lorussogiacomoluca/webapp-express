//Express
const express = require("express");
const app = express();
const port = 3000;

//DB
const connection = require("./data/db");

//Router
const movieRouter = require("./routers/movieRouter.js");

//Movie Router
app.use("/api/movies", movieRouter);

//Entry point
app.use("/", (req, res) => {
  res.send("Welcome to my movies library");
});

//Listen
app.listen(port, () => {
  console.log(`Listening on port #${port}`);
});
