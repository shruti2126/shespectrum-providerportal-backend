import { Provider, Qualifications, ProviderQualifications } from "../../models/index.js";

const getProvidersByQualification = async (req, res) => {
  const { qualification } = req.params;

  try {
    // Find the qualification record first
    const qualificationRecord = await Qualifications.findOne({
      where: { qualification_name: qualification },
    });

    if (!qualificationRecord) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    // Find the providers related to this qualification
    const providers = await Provider.findAll({
      include: [
        {
          model: Qualifications,
          through: ProviderQualifications,
          where: { id: qualificationRecord.id },
        },
      ],
    });

    res.status(200).json(providers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default getProvidersByQualification;
