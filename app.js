//Express
const express = require("express");
const app = express();
const port = 3000;

//Middlewares
//notFound.js
const notFound = require("./middlewares/notFound.js");

//public
app.use(express.static("public"));

//DB
const connection = require("./data/db");

//Router
const movieRouter = require("./routers/movieRouter.js");

//Movie Router
app.use("/api/movies", movieRouter);

//Entry point
app.get("/", (req, res) => {
  res.send("Welcome to my movies library");
});

/* -------------------------------------------------------------------------- */
/*                                 MiddleWares                                */
/* -------------------------------------------------------------------------- */
app.use(notFound);

//Listen
app.listen(port, () => {
  console.log(`Listening on port #${port}`);
});
