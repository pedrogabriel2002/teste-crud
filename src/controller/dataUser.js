const router = require('express').Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.render('data', {users: users, n: 0})  
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = router