const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

const getAll = catchError(async(req, res) => {
    const userId = req.user.id;
    const results = await Purchase.findAll({ include: { Product },  where: {userId}});
    return res.json(results);
});
// con esta logica busca los productos en el cart los elimina y los pasa aca al purchase
const purchaseCar = catchError(async(req, res) => {
    const cart = await Cart.findAll({ where: {userId: req.user.id}, attributes: ['quantity', 'productId', 'userId' ], raw: true  })
    await Purchase.bulkCreate(cart);
    await Cart.destroy({ where: {userId: req.user.id} })
    return res.json(cart);
});

const remove = catchError(async(req, res) => {
    
    const { id } = req.params;
    await Purchase.destroy({ where: {id} });
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    purchaseCar,
    remove
}