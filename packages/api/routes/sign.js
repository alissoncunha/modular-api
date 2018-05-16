const express = require('express');
const router = express.Router();

function signup(req, res) {
    res.send({ name: 'signup' });
};

function signin(req, res) {
    res.send({ name: 'signin' });
};

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;