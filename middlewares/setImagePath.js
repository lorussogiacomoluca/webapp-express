const setImagePath = (req, res, next) => {
  req.imagePath = `${req.protocol}://${req.get("host")}/movieImg/`;
  next();
};

module.exports = setImagePath;
