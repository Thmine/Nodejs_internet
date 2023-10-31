const express = require('express')
const router = express.Router()
const { getHomepage, getABC, getimg } = require('../controllers/homeController')

//router.Method('/route',handler)

router.get('/home', getHomepage)
router.get('/abc', getABC)
router.get('/img', getimg)
module.exports = router