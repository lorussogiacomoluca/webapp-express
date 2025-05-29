const index = (req, res) => {
  res.send(`Lista dei film`);
  console.log("movieController.index called");
};

module.exports = { index };
