import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Provider from "./providers.js";
import Expertise from "./expertise.js";

const ProviderExpertise = sequelize.define(
  "ProviderExpertise",
  {
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Provider,
        key: "id",
      },
    },
    expertise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Expertise,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "provider_expertise", // Optional: Explicitly name the table
  }
);

export default ProviderExpertise;
