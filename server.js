const express = require("express");
const server = express();
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const path = require("node:path");

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.urlencoded({ extended: true }));

server.use("/", indexRouter);
server.use("/new", newRouter);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
