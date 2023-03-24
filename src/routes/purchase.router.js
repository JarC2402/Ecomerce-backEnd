const { getAll, create, remove } = require('../controllers/purchase.controllers');
const express = require('express');

const purchaseRouter = express.Router();

purchaseRouter.route('/')
    .get(getAll)
    .post(create);
purchaseRouter.route('/:id')
    .delete(remove)
module.exports = purchaseRouter;