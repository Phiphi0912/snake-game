'use strict';
module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    userId: DataTypes.INTEGER,
    score: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'Scores'
  });
  Score.associate = function(models) {
    Score.belongsTo(models.User, { foreignKey: 'UserId' })
  };
  return Score;
};