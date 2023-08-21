const router = require('express').Router()
const User = require('../models/user')

router.get('/data/update', async (req, res) => {
    const user = await User.findById(req.query.id)

    if (!user) {
        res.redirect('/data')
    }

    res.render('update', { user: user})
})

router.put('/data', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.body.id, { name: req.body.name, age: req.body.age })

    if (!user) {
        res.redirect('/data')
    }

    try {
        user.save()
        res.redirect('/data')
    } catch (error) {
        res.redirect('/data')
    }
})

module.exports = router