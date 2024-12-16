import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Provider from "./providers.js";

const ProviderSchedule = sequelize.define(
  "ProviderSchedule",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Provider,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    work_start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    work_end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    slot_duration: {
      type: DataTypes.INTEGER, //in minutes
      allowNull: false,
    },
    slot_interval: {
      type: DataTypes.INTEGER, //break time in minutes
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "provider_schedules",
  }
);

export default ProviderSchedule;
