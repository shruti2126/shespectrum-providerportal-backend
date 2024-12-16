import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import DaySlot from "./day_slots.js";

const TimeSlot = sequelize.define(
  "TimeSlot",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    is_booked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    day_slot_id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Mandatory relationship
      references: {
        model: DaySlot, // Reference to the DaySlot model
        key: "id",
      },
      onDelete: "CASCADE", // Delete time slots when the day slot is deleted
    },
  },
  {
    timestamps: true, // or false if not required
    tableName: "time_slots",
  }
);

export default TimeSlot;
