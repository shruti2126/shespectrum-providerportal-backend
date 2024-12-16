import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Provider = sequelize.define(
  "Providers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    calendarType: {
      type: DataTypes.ENUM("Calendly", "Google", "Outlook", "Manual"),
      allowNull: false,
    },
    calendlyLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    googleCalendarId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    outlookCalendarId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    experienceInYears: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "providers",
    indexes: [
      {
        fields: ["name"],
      },
      {
        fields: ["service"],
      },
      {
        fields: ["calendarType"],
      },
    ],
  }
);

export default Provider;
