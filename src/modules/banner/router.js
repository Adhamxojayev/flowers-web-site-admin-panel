const router = require("express").Router();
const controller = require("./controller.js");

router.get("/banner", controller.GET);
router.post("/banner", controller.bannerImage, controller.POST);
router.delete("/banner", controller.DELETE);


module.exports = router;
