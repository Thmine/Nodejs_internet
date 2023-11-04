const express = require('express')
const router = express.Router()
const { getHomepage, getsign_in, getBieudo, gettable, getvideo, getsign_up, postCreateUser, getUpdateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

//router.Method('/route',handler)

router.get('/home', getHomepage)
router.get('/bieudo', getBieudo)
router.get('/table', gettable)
router.get('/video', getvideo)
router.get('/sign_in', getsign_in)
router.get('/sign_up', getsign_up)
router.post('/create_user', postCreateUser)
router.post('/update_user', postUpdateUser)
router.get('/update/:id', getUpdateUser)
router.post('/delete_user/:id', postDeleteUser)
router.post('/delete_user', postHandleRemoveUser)
module.exports = router