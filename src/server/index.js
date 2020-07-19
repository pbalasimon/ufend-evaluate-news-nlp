const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/sentiment", function (req, res) {
  console.log(textapi);
  textapi.sentiment({ url: req.body.url }, (error, response) => {
    if (!error) {
      const result = {
        polarity: response.polarity,
        subjectivity: response.subjectivity,
        polarityConfidence: response.polarity_confidence,
        subjectivityConfidence: response.subjectivity_confidence,
      };
      console.log(result);
      res.send(result);
    } else {
      console.log(error, "Error");
    }
  });
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
