const User = require('./User');
const Cart = require('./Cart');
const Category = require('./Category')
const Product = require('./Product')
const ProductImg = require('./ProductImg')
const Purchase = require('./Purchase')

Cart.belongsTo(User);
User.hasMany(Cart);

Cart.belongsTo(Product);
Product.hasMany(Cart);

Product.belongsTo(Category);
Category.hasMany(Product);

Purchase.belongsTo(User);
User.hasOne(Purchase);

Purchase.belongsTo(Product);
Product.hasOne(Purchase);

ProductImg.belongsTo(Product);
Product.hasMany(ProductImg);