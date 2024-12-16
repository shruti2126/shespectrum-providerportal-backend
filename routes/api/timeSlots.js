import express from "express";
const timeSlotRoutes = express.Router();

// Fetch time slots for a specific daySlotId
timeSlotRoutes.get("/:daySlotId", async (req, res) => {
  const { daySlotId } = req.params;
});

//Add multiple time slots for a day slot

export default timeSlotRoutes;
