const express = require('express');
const { loginSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/login', async (req, res) => {
    const { UserDbConnector } = res.locals;
    try {
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }

        const user = await UserDbConnector.findOne(value);
        if (!user) {
            throw new Error('Email / Password not valid')
        }
        res.send(user);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;