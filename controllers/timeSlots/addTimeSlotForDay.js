import { DaySlot, ProviderSchedule, TimeSlot } from "../../models/index.js";

const addTimeSlotForDay = async (req, res) => {
    const { daySlotId } = req.params;
    const { start_time, end_time } = req.body;

    try {
        //find day using daySlotId
        const day = await DaySlot.findByPk(daySlotId);
        if (!day) {
            return res.status(404).json({ message: "Day not found" });
        }
      
        //only allow creation of time slots for non-fully booked days
        const isFullyBooked = day.isFullyBooked;
        if (!isFullyBooked) {
          //create time slot
          const timeSlot = await TimeSlot.create({
            start_time,
            end_time,
            day_slot_id: daySlotId,
          });

          //When last time slot created, mark day fully booken
          const endTimeSlot = await ProviderSchedule.findOne({
            where: { provider_id: day.provider_id },
          });
          if (endTimeSlot === end_time) {
            await DaySlot.update({ isFullyBooked: true }, { where: { id: daySlotId } });
          }
          res.status(201).json(timeSlot);
        } else {
            res.status(400).json({ message: "Day is fully booked" });
        }
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }

}

export default addTimeSlotForDay;