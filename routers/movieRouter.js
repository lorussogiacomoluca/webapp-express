const express = require("express");
const router = express.Router;
const movieController = require("../controllers/movieController");

router.length("/", movieController.index);
