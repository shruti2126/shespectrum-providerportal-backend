import { DaySlot, TimeSlot } from "../../models/index.js";

const getTimeSlotForDay = async (req, res) => { 
    const {daySlotId} = req.params;
    try {
        const daySlot = await DaySlot.findByPk(daySlotId);
        if (!daySlot) {
            return res.status(404).json({ message: "Day slot not found" });
        }
        const timeSlots = await TimeSlot.findAll({
            where: {
                day_slot_id: daySlotId
            }
        })
        res.status(200).json(timeSlots);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export default getTimeSlotForDay;