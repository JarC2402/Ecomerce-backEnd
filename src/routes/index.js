const express = require('express');
const categoryReouter = require('./category.router');
const productRouter = require('./products.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/categories', categoryReouter)

module.exports = router;