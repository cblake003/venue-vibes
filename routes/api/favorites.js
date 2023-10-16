var express = require('express');
var router = express.Router();
const favoritesCtrl = require('../../controllers/api/favorites');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', favoritesCtrl.index);
router.post('/create', ensureLoggedIn, favoritesCtrl.create);
router.delete('/:id', ensureLoggedIn, favoritesCtrl.delete);
// router.delete('/:id', ensureLoggedIn, eventsCtrl.delete)



module.exports = router;