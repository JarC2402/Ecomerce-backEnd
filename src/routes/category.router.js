const { getAll, create, remove } = require('../controllers/category.controllers');
const express = require('express');

const categoryReouter = express.Router();

categoryReouter.route('/')
    .get(getAll)
    .post(create);

categoryReouter.route('/:id')
    .delete(remove)

module.exports = categoryReouter;