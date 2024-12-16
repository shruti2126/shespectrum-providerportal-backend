import { DaySlot, Provider } from "../../models/index.js";

const getDaySlotsForProvider = async (req, res) => {
    const providerId = req.params.providerId;
    try {
        //Check if provider exists
        const provider = await Provider.findByPk(providerId);
        if (!provider) {
            return res.status(404).json({ message: "Provider not found" });
        }
        const daySlots = await DaySlot.findAll({
            where: {
                provider_id: providerId
            }
        })
        res.status(200).json(daySlots);
    } catch (error) {
        
    }
}

export default getDaySlotsForProvider;