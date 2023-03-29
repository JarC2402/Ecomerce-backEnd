const catchError = require('../utils/catchError');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const userId = req.user.id; // con esto haces q solo el usuario logeado pueda ver lo q tiene en su carro
    const results = await Cart.findAll({ include: [Product, User], where: {userId} }); // con esto haces q solo el usuario logeado pueda ver lo q tiene en su carro
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const { productId, quantity } = req.body;
    const userId = req.user.id;
    const result = await Cart.create( { productId, quantity, userId } );
    return res.status(201).json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Cart.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    delete req.body.userId;
    delete req.body.productId;
    const result = await Cart.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    remove,
    update
}