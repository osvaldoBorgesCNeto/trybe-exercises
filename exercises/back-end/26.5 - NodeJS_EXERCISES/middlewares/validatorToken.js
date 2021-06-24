const validatorToken = (req, res, next) => {
  const { authorization } = req.headers;
  const regex = new RegExp("^[a-zA-Z0-9]*$");
  
  if (!regex.test(authorization) || authorization.length !== 12) {
    return res.status(401).json({ "message": "invalid token" });
  }

  return next();
};

module.exports = validatorToken;
