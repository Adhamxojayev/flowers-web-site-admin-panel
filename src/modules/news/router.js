const router = require('express').Router()
const controller = require('./controller.js')

router.get('/news', controller.GET)
router.get('/news/:newsId', controller.GET)
router.post('/news', controller.newsImage,  controller.POST)




module.exports = router