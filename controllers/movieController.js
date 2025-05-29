const connection = require("../data/db");

const index = (req, res) => {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (error, moviesResutls) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    res.send(moviesResutls);
  });
};

module.exports = { index };
