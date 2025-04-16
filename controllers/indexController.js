const messages = require("../data/msgs");
const db = require("../db/queries");
exports.index = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};
exports.showMsg = async (req, res) => {
  const id = req.params.id;
  const usernames = await db.getAllMessages();
  const msg = usernames[id];
  if (!msg) {
    return res.status(404).send("message not found");
  }
  res.render("messageDetail", { user: msg });
};
exports.getUsernames = async (req, res) => {
  try {
    const usernames = await db.getAllMessages();
    console.log("Usernames: ", usernames);
    res.render("index", { usernames, title: "Mini Massageboard" });
  } catch (err) {
    console.error(err);
  }
};
