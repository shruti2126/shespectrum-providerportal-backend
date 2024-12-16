import { Provider, Expertise, Qualifications } from "../../models/index.js";

const addProvider = async (req, res) => {
  console.log("Adding Provider...");
  const {
    username,
    mobileNumber,
    email,
    service,
    calendarType,
    calendlyLink,
    googleCalendarId,
    outlookCalendarId,
    experienceInYears,
    expertise,
    qualifications,
  } = req.body;

  try {
    // Create the provider
    const provider = await Provider.create({
      name : username,
      mobileNumber,
      email,
      service,
      calendarType,
      calendlyLink,
      googleCalendarId,
      outlookCalendarId,
      experienceInYears,
    });

    // Associate expertise areas with the provider
    if (expertise && expertise.length > 0) {
      // Find existing expertise records
      const expertiseRecords = await Expertise.findAll({
        where: {
          expertise_name: expertise,
        },
      });

      // Add any missing expertise records to the database
      const newExpertiseRecords = await Promise.all(
        expertise.map(async (exp) => {
          const [expertiseRecord] = await Expertise.findOrCreate({
            where: { expertise_name: exp },
          });
          return expertiseRecord;
        })
      );

      // Add expertise to provider
      await provider.addExpertise([
        ...expertiseRecords,
        ...newExpertiseRecords,
      ]);
    }

    // Associate qualifications with the provider
    if (qualifications && qualifications.length > 0) {
      const qualificationRecords = await Qualifications.findAll({
        where: {
          qualification_name: qualifications,
        },
      });

      // Add any missing qualifications records to the database
      const newQualificationRecords = await Promise.all(
        qualifications.map(async (qual) => {
          const [qualificationRecord] = await Qualifications.findOrCreate({
            where: { qualification_name: qual },
          });
          return qualificationRecord;
        })
      );

      // Add qualifications to provider
      await provider.addQualifications([
        ...qualificationRecords,
        ...newQualificationRecords,
      ]);
    }

    res.status(201).json(provider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default addProvider;
