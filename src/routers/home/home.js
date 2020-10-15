const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const response = {
        message: 'Hallo ini web javascript saya'
    };

    res.send(response);
});

module.exports = router;