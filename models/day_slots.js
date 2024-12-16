import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Provider from "./providers.js";

const DaySlot = sequelize.define(
  "DaySlot",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    is_fully_booked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Provider,
        key: "id",
      },
      onDelete: "CASCADE", // Ensures that day slots are deleted if the provider is deleted
    },
  },
  {
    timestamps: true,
    tableName: "day_slots",
  }
);

export default DaySlot;
