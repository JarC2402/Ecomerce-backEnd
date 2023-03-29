const { getAll, setProductsImages, create, getOne, remove, update} = require('../controllers/protuct.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const productRouter = express.Router();

productRouter.route('/')
    .get(getAll)
    .post(verifyJWT, create);

productRouter.route('/:id')
    .get(getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update)

productRouter.route('/:id/images')
    .put(verifyJWT, update)
    .post(verifyJWT, setProductsImages);

module.exports = productRouter;