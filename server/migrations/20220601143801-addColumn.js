"use strict";
const Sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("fourths", "streamerId", {
      type: Sequelize.STRING(20),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("fourths", "streamerId");
  },
};
