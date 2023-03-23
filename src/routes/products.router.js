const { getAll, create, getOne, remove} = require('../controllers/protuct.controllers');
const express = require('express');

const productRouter = express.Router();

productRouter.route('/')
    .get(getAll)
    .post(create);

productRouter.route('/:id')
    .get(getOne)
    .delete(remove)

module.exports = productRouter;