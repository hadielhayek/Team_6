var express = require('express');
var router = express.Router();
var ExperienceController = require('../Controllers/experienceController')

router.get('/', ExperienceController.getAll )

router.get('/:id', ExperienceController.get)

 router.post('/', ExperienceController.post)

router.put('/:id', ExperienceController.put)

 router.delete('/:id', ExperienceController.delete)


module.exports = router;