'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class add_collum_in_pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  add_collum_in_pessoas.init({
    deleteAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'add_collum_in_pessoas',
  });
  return add_collum_in_pessoas;
};