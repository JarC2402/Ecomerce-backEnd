const sequelize = require('../utils/connection');
const User = require('../models/User')
require('../models/Cart');
require('../models/Category');
require('../models/Product');
require('../models/Purchase');
require('../models/User');
require('../models')


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        await User.create({
            firstName: "Konan",
            lastName: "akaztki",
            email: "Pain.24021@gmail.com",
            password: "teamorin",
            phone: "548787"
        })
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();