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
    // associations can be defined here
  };
  return User;
};