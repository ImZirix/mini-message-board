const router = require("express").Router();
const indexController = require("../controllers/indexController");
router.get("/", indexController.getUsernames);
router.get("/messages/:id", indexController.showMsg);
module.exports = router;
