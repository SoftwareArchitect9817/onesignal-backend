const express = require('express');
const router = express.Router();
const tscontrol = require("./controller/tscontrol");

router.post("/upload", multer({ storage: Uploader.storage, fileFilter: Uploader.filter }).any(), tscontrol.upload)

module.exports = router;