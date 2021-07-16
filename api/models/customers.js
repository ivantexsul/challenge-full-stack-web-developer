'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  };
  Customers.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validaNome: function(dado) {
          if(dado.length < 3) throw new Error('O campo nome deve ter mais que 3 caracteres. ')
        }
      }
    },    
    
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dados de email inválidos'
        }
      }
    },
  }, {
    sequelize,
    paranoid: false,
    defaultScope: {
      
    },
    modelName: 'Customers',
  });
  return Customers;
};