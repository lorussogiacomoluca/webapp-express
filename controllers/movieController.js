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

const show = (req, res) => {
  const id = req.params.id;
  const sqlMovie = `SELECT * FROM movies WHERE id = ?`;
  connection.query(sqlMovie, [id], (error, movieResult) => {
    if (error) {
      res.status(500).json({ message: error.message });
    }
    res.send(movieResult);
  });
};

module.exports = { index, show };
