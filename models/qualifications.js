import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Qualification = sequelize.define(
  "Qualifications",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qualification_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true, // Sequelize will add createdAt and updatedAt
    tableName: "qualifications",
    indexes: [
      {
        unique: true,
        fields: ["qualification_name"],
      },
    ],
  }
);

export default Qualification;
