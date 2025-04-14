const messages = require("../data/msgs");

exports.index = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};
exports.showMsg = (req, res) => {
  const id = req.params.id;
  const msg = messages[id];
  if (!msg) {
    return res.status(404).send("message not found");
  }
  res.render("messageDetail", { messages: msg });
};
