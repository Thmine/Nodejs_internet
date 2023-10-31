const express = require('express')
const router = express.Router()
const { getHomepage, sign_in, getimg } = require('../controllers/homeController')

//router.Method('/route',handler)

router.get('/home', getHomepage)
router.get('/signin', sign_in)
router.get('/img', getimg)
module.exports = router