import {Provider} from "../../models/index.js";
const getProviderById = async (req, res) => {
    const { providerId } = req.params;

    try {
        const provider = await Provider.findByPk(providerId);

        if (!provider) {
            return res.status(404).json({ message: "Provider not found" });
        }

        res.status(200).json(provider);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export default getProviderById;