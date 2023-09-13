import  Sequelize  from 'sequelize';
import sequelize from '../configs/database.js';

const Product = sequelize.define('Product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
},{
    tableName: 'product',
});

export default Product;
