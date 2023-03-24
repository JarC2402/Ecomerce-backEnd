const catchError = require('../utils/catchError');
const ProductImg = require('../models/ProductImg');

const getAll = catchError(async(req, res) => {
    const results = await ProductImg.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await ProductImg.create(req.body);
    return res.status(201).json(result);
});


const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ProductImg.destroy({ where: {id} });
    return res.sendStatus(204);
});


module.exports = {
    getAll,
    create,
    remove
}