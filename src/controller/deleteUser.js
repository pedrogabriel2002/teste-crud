const router = require('express').Router()
const User = require('../models/user')

router.delete('/data', async (req, res) =>{
    const id = req.body.id  

    try {
        await User.deleteOne({ _id: id })
        res.redirect('/data')
    } catch (error) {
        res.redirect('/data')
    }
})

module.exports = router