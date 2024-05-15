const express = require("express");
const router = express.Router();
const Validator = require("../middleware/Validator");

const {
  getAll,
  getOne,
  create,
  update,
  remove,
} = require("../controller/diaryController");

router.route("/").get(getAll).post(create);
router.route("/:id").get(getOne).patch(update).delete(remove);

module.exports = router;
