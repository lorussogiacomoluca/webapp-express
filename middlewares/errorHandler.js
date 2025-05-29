const errorHandler = (error, req, res, next) => {
  res
    .status(500)
    .json({ message: error.message || "Errore interno al server" });
};

module.exports = errorHandler;
