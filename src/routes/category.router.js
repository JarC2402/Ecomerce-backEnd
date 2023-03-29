const { getAll, create, remove } = require('../controllers/category.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const categoryReouter = express.Router();

categoryReouter.route('/')
    .get(getAll)
    .post(verifyJWT, create);

categoryReouter.route('/:id')
    .delete(verifyJWT, remove)

module.exports = categoryReouter;