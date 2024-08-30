const express = require('express');
const multer = require('multer');
const fileController = require('../controllers/fileController.js');

const router = express.Router();

const upload = multer();

router.post('/upload', upload.single('file'), fileController.uploadImage);
router.get('/images/:id', fileController.getImage);

module.exports = router;
