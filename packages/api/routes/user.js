const express = require('express');
const router = express.Router();

const { Authentication } = require('../modules');

const users = [{
    name: 'Neymar Jr.',
    age: '24'
}, {
    name: 'Cristiano Ronaldo',
    age: '28'
}];

function listUsers(req, res) {
    return res.send(users);
}

router.get('/users', listUsers);

module.exports = router;