const express = require('express');
const cartRouter = require('./cart.router');
const categoryReouter = require('./category.router');
const productImgRouter = require('./productImg.router');
const productRouter = require('./products.router');
const purchaseRouter = require('./purchase.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/categories', categoryReouter)
router.use('/product_images', productImgRouter)
router.use('/cart', cartRouter)
router.use('/purchases', purchaseRouter )

module.exports = router;