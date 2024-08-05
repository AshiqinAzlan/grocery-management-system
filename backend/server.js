const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
//Create a route
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//Get Request
app.get("/", (req, res) => {
  //request, response (can also use these)
  res.status(201).send("Hello World! with status"); // the status code is not compulsory
  // res.send("Hello World! without status");
});
