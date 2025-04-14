const messages = require("../data/msgs");
exports.createMsg = (req, res) => {
  const { msg, name } = req.body;
  console.log(req.body);
  messages.push({ text: msg, user: name, added: new Date() });
  res.redirect("/");
};
