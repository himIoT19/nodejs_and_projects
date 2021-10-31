const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "himanshu") {
    req.user = { name: "himanshu" };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
