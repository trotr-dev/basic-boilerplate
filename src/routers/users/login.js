const express = require('express');
const { UserModel } = require('../../models')

const router = express.Router();

router.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email, password }).select('-password')
        if (!user) {
            throw new Error('Email / Password not valid')
        }
        res.send(user);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;