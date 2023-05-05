const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skills");

router.get("/", skillController.index);
router.get("/new", skillController.newSkill);
router.get("/:id", skillController.show);

router.post("/", skillController.create);
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
