const router = require('express').Router()
const { update } = require('../controllers/userController')
const { auth } = require('../middleware/auth')
const { validate } = require('../validators')
const { rules: updateRules } = require('../validators/user/update')
const { userFile } = require('../middleware/fileUpload')


router.post('/update', [auth, userFile, updateRules, validate], update)

module.exports = router