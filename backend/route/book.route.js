const express = require('express');
const  getBook  = require('../controllers/Book.controller');

const router = express.Router();

router.get('/', getBook);

module.exports = router;