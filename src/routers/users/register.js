const express = require('express');
const { UserModel } = require('../../models');
const { registerSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/register', async (req, res) => {
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        const user = new UserModel(value);
        await user.save();
        res.send({ username, email, fullname });
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;