const DataTypes = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Fourth = sequelize.define(
    "fourth",
    {
      category: { type: DataTypes.STRING(200), allowNull: false },
      title: { type: DataTypes.STRING(200), allowNull: false },
      startedAt: { type: DataTypes.STRING, allowNull: false },
    },
    { charset: "utf8mb4", collate: "utf8mb4_general_ci" }
  );
  Fourth.associate = (db) => {};
  return Fourth;
};
