'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    score: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'Users'
  });
  User.associate = function(models) {
    User.hasMany(models.Score, { foreignKey: 'UserId' })
  };
  return User;
};