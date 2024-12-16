import { Provider, DaySlot, TimeSlot } from "../../models/index.js";
import { configDotenv } from "dotenv";
/**
 * @api {post} /daySlots Add a new day slot for a provider
 * @apiName addDaySlot
 * @apiGroup Day Slot
 * @apiParam {integer} providerId The id of the provider
 * @apiParam {string} date A date string in the format of 'YYYY-MM-DD'
 * @apiSuccess {object} daySlot The day slot object
 * @apiSuccessExample {json} Success-Response:
 *     {
 *       "id": 1,
 *       "date": "2021-01-01",
 *       "isFullyBooked": false,
 *       "provider_id": 1
 *     }
 * @apiError ProviderNotFound The provider does not exist
 * @apiErrorExample {json} Error-Response:
 *     {
 *       "message": "Provider not found"
 *     }
 */

const MaxNumberOfTimeSlotsAllowed = process.env.MAX_NUMBER_OF_TIME_SLOTS; // Default Maximum number of time slots allowed per day

const addDaySlot = async (req, res) => {
  const { providerId, date } = req.body;

  try {
    // Find provider by id
    const provider = await Provider.findByPk(providerId);
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    // Create a day slot for the provider
    const daySlot = await DaySlot.create({ date, provider_id: providerId });
    
    res.status(201).json(daySlot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default addDaySlot;
