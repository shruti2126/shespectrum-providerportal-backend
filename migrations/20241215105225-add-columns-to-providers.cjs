"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add email column with a temporary default value
    await queryInterface.addColumn("providers", "email", {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: "update@placeholder.com", // Temporary default value
      unique: true,
    });

    // Add mobileNumber column with a temporary default value
    await queryInterface.addColumn("providers", "mobileNumber", {
      type: Sequelize.STRING(15),
      allowNull: false,
      defaultValue: "0000000000", // Temporary default value
      unique: true,
    });

    // Remove default value for email column
    await queryInterface.changeColumn("providers", "email", {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    });

    // Remove default value for mobileNumber column
    await queryInterface.changeColumn("providers", "mobileNumber", {
      type: Sequelize.STRING(15),
      allowNull: false,
      unique: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the columns
    await queryInterface.removeColumn("providers", "email");
    await queryInterface.removeColumn("providers", "mobileNumber");
  },
};
