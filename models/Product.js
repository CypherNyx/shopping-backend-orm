// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      // criteria: int, not null, primary key, auto-inc.
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      // criteria: string, not null.
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      // criteria: decimal, not null, validate decimal
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock: {
      // criteria: int, not null, default 10, validate numeric
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      Validate: {
        isNumeric: true,
      }
    },
    catergory_id: {
      // criteria: int, references category.id
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
