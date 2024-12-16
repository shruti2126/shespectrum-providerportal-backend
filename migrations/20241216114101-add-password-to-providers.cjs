"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("providers", "password", {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: "password",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("providers", "password");
  },
};
