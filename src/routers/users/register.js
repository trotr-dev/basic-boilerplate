const express = require('express');
const { UserModel } = require('../../models')

const router = express.Router();

router.post('/users/register', async (req, res) => {
    try {
        const { username, email, fullname, password } = req.body;
        const user = new UserModel({
            username,
            email,
            fullname,
            password
        });
    
        await user.save();
    
        res.send({ username, email, fullname });
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;