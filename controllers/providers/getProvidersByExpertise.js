import { Provider, Expertise, ProviderExpertise } from "../../models/index.js";

const getProvidersByExpertise = async (req, res) => {
  const { expertise } = req.params;

  try {
    // Find the expertise by name
    const expertiseRecord = await Expertise.findOne({
      where: { expertise_name: expertise },
    });

    if (!expertiseRecord) {
      return res.status(404).json({ message: "Expertise not found" });
    }

    // Find all providers with the given expertise using the junction table
    const providers = await Provider.findAll({
      include: [
        {
          model: Expertise,
          through: ProviderExpertise,
          where: { id: expertiseRecord.id }, // Match providers with this expertise
        },
      ],
    });

    res.status(200).json(providers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default getProvidersByExpertise;
