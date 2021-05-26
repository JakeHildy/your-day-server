const express = require("express");
const router = express.Router();
const multer = require("multer");

const imageController = require("./../controllers/imageController");

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "");
  },
});

const upload = multer({ storage }).single("file");

router.route("/").post(upload, imageController.uploadImage);

module.exports = router;
