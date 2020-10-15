const express = require('express');
const { registerSchema } = require('../../schemas');

const router = express.Router();

router.post('/users/register', async (req, res) => {
    const { UserDbConnector } = res.locals;
    try {
        const { error, value } = registerSchema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        await UserDbConnector.insert(value);
        res.send({ username, email, fullname });
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;