import { Provider } from "../../models/index.js";
const deleteProvider = async (req, res) => {
  async (req, res) => {
    const { id } = req.params;
    try {
      const provider = await Provider.findByPk(id);
      if (!provider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      await provider.destroy();
      res.status(200).json({ message: "Provider deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
};

export default deleteProvider;
