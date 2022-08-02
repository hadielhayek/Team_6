var express = require('express');
var router = express.Router();
var blogcontroller = require('../Controllers/blogController')


router.get('/', blogcontroller.getAll )

router.get('/:id', blogcontroller.get)


 router.post('/', blogcontroller.post)

router.put('/:id', blogcontroller.put)

 router.delete('/:id', blogcontroller.delete)


module.exports = router;