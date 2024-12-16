import { Router } from "express";

import providerRoutes from "./api/providers.js";
import daySlotRoutes from "./api/daySlots.js";
import timeSlotRoutes from "./api/timeSlots.js";

const router = Router();

router.use("/providers", providerRoutes);
router.use("/daySlots", daySlotRoutes);
router.use("/timeSlots", timeSlotRoutes);

export default router;
