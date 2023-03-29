const { getAll, purchaseCar, remove } = require('../controllers/purchase.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .get(verifyJWT, getAll)
    .post(verifyJWT, purchaseCar);
purchaseRouter.route('/:id')
    .delete(verifyJWT, remove)
module.exports = purchaseRouter;