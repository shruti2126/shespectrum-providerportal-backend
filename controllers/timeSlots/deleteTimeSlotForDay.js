import { TimeSlot } from "../../models/index.js";

const deleteTimeSlotForDay = async (req, res) => {
    const {timeSlotId} = req.body;
    try {
        //Find and destroy this time slot with id
        await TimeSlot.destroy({
            where: {
                id: timeSlotId
            }
        })
        res.status(200).json({message: "Time slot deleted successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}