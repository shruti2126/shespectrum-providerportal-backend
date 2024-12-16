import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Provider from "./providers.js";
import Qualifications from "./qualifications.js";
const ProviderQualifications = sequelize.define(
  "ProviderQualifications",
  {
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Provider,
        key: "id",
      },
    },
    qualification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Qualifications,
        key: "id",
      },
    },
  },
  {
    timestamps: false, // don't need timestamps for the junction table
    tableName: "provider_qualifications", // Optional: Explicitly name the table
  }
);

export default ProviderQualifications;
