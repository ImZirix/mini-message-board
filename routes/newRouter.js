const router = require("express").Router();
const newRouterCon = require("../controllers/newRouterCon");
const handleNewMsg = require("../controllers/handleNewMsg");
router.get("/", newRouterCon.new);
router.post("/", handleNewMsg.createMsg);
module.exports = router;
