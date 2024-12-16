import { Provider } from "../../models/index.js";

const getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default getAllProviders;
