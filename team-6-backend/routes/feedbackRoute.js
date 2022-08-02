var express = require('express');
var router = express.Router();
var feedbackController = require('../Controllers/feedbackController')

router.get('/', feedbackController.getAll )

router.get('/:id', feedbackController.get)

 router.post('/', feedbackController.post)

router.put('/:id', feedbackController.put)

 router.delete('/:id', feedbackController.delete)

module.exports = router;