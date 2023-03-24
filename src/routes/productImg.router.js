const { getAll, create, remove } = require('../controllers/productImg.controllers');
const express = require('express');

const productImgRouter = express.Router();

productImgRouter.route('/')
    .get(getAll)
    .post(create);

productImgRouter.route('/:id')
    .delete(remove)

module.exports = productImgRouter;