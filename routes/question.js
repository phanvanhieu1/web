var express = require("express");
var question = express.Router();

question.get("/question", (req, res) => {
  res.render("user/question");
}
);
module.exports = question;