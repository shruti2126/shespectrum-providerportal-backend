import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Expertise = sequelize.define(
  "Expertise",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    expertise_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "expertise",
    indexes: [
      {
        unique: true,
        fields: ["expertise_name"],
      },
    ],
  }
);
export default Expertise;
