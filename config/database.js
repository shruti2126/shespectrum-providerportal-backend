import { Sequelize } from "sequelize";
import "dotenv/config"; // Automatically loads environment variables from .env

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Disable query logging
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default sequelize;
