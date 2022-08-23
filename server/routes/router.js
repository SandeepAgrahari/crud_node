const express = require('express')
const {homeRoute, add_user, update_user} = require('../services/render')
const controller = require('../controller/controller')
const router = express.Router()

/**
 * @description Root Route
 * @method GET /
 */
router.get('/',homeRoute)

/**
 * @description Add User Route
 * @method GET /add_user
 */
router.get('/add-user',add_user)

/**
 * @description Update user Route
 * @method GET /update_user
 */
router.get('/update-user',update_user)

//Api route
router.post('/api/users', controller.create)
router.get('/api/users', controller.find)
router.put('/api/users/:id', controller.update)
router.delete('/api/users/:id', controller.delete)

module.exports = router