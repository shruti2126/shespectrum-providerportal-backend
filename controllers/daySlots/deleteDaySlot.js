import { DaySlot } from "../../models/index.js";
const deleteDaySlot = async (req, res) => {
   const { daySlotId } = req.params;

   try {
     await DaySlot.destroy({
       where: {
         id: daySlotId
       }
     })
     res.status(200).json({ message: "Day slot deleted successfully" });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: error.message });
   }
}

export default deleteDaySlot;