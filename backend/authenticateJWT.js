const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("Token:", token); // Log the token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.error("JWT Verification Error:", err);
        return res.status(403).json({ message: "Forbidden" });
      }
      console.log("Verified User:", user);
      req.user = user; // Ensure user is attached to req
      next();
    });
  } else {
    console.error("Authorization header missing");
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authenticateJWT;