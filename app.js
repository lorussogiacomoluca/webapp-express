require("dotenv").config();

//Express
const express = require("express");
const app = express();
const port = 3000;

//Import CORS module
const cors = require("cors");

// CORS USE
app.use(cors({ origin: process.env.FE_APP }));

//Middlewares
//notFound.js
const notFound = require("./middlewares/notFound.js");
//errorHandler
const errorHandler = require("./middlewares/errorHandler.js");
//imagePath
const setImagePath = require("./middlewares/setImagePath.js");
app.use(setImagePath);
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
app.use(errorHandler);

//Listen
app.listen(port, () => {
  console.log(`Listening on port #${port}`);
});
