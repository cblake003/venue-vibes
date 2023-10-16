const express = require('express');
const router = express.Router();
const tmCtrl = require('../../controllers/api/tm.js');
const ensureLoggedIn = require('../../config/ensureLoggedIn.js');
// const ensureLoggedIn = require('../../config/ensureLoggedIn.js);

router.get('/', ensureLoggedIn, tmCtrl.index);

module.exports = router