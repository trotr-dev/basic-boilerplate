const express = require('express');
const { UserModel } = require('../../models')

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({}).select('-password')
        res.send(users);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;