import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Sequelize from "./config/database.js";
import routes from "./routes/index.js";
import "./models/index.js";
import { testAssociations } from "./Seed/testAssociations.js";
import { testExpertise } from "./Seed/testExpertise.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Routes
app.use("/api", routes);

//Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json({
    status: "error",
    message,
  });
});

//Create a new provider

// Sync all models
Sequelize.sync({ alter: true }) // You can also use { force: true } to drop and recreate the tables
  .then(async () => {
    console.log("Database & tables synced!");

    // Call the test functions after syncing is complete
    //await testAssociations(); // Test associations if needed
    //await testExpertise(); // Seed initial expertise or test associations related to expertise
    // Start the server after the database is synced
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Unable to sync database:", err));
