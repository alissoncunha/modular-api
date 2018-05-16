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

function getUsers(req, res) {
    return res.send(users);
}

function getUser(req, res) {
    return res.send({ name: `getuser` });
}

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;