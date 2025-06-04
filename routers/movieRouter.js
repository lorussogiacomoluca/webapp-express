const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController.js");

router.get("/", movieController.index);
router.get("/:id", movieController.show);
//Route for Post Review
router.post('/"id/review', movieController.storeReview);

module.exports = router;
