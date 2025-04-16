const messages = require("../data/msgs");
const addNew = require("../db/queries");
exports.createMsg = async (req, res) => {
  await addNew.insertMessage(req.body.username, req.body.text);
  console.log(req.body);
  res.redirect("/");
};
