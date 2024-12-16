import express from "express";
const daySlotRoutes = express.Router();

// Fetch day slots for a specific date (for a provider)
daySlotRoutes.get("/:providerid/:date", async (req, res) => {
  const { providerid, date } = req.params;
});

//Add day slot for a provider

//Add multiple day slots for a provider 

export default daySlotRoutes;
