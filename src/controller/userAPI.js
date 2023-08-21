const router = require('express').Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/user', async (req, res) => {
    const {name, age} = req.body
    
    if (!name || !age) {
        res.status(422)
        res.json({message: 'All camps must be filled'})
    }

    const user = {
        name,
        age
    }

    try {
        await User.create(user)    
        res.status(201)
        res.redirect('/')
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router