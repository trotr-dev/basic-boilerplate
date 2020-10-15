const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {
    const { UserDbConnector } = res.locals;
    console.log(UserDbConnector)
    try {
        const users = await UserDbConnector.find();
        res.send(users);
    } catch(e) {
        res.send({ message: e.message });
    }
});

module.exports = router;