import { Expertise, Qualifications } from "../models/index.js";
import sequelize from "../config/database.js";

const seedData = async () => {
  try {
    await sequelize.sync();

    // Seed Expertise data
    const expertiseData = [
      { expertise_name: "Cardiology" },
      { expertise_name: "Dermatology" },
      { expertise_name: "Psychology" },
      { expertise_name: "Nutrition" },
      { expertise_name: "Physiotherapy" },
    ];

    // Seed Qualifications data
    const qualificationData = [
      { qualification_name: "PhD" },
      { qualification_name: "MSc" },
      { qualification_name: "BSc" },
      { qualification_name: "Diploma in Nutrition" },
      { qualification_name: "Diploma in Physiotherapy" },
    ];

    // Upsert expertise data
    await Promise.all(
      expertiseData.map(async (exp) => {
        await Expertise.findOrCreate({
          where: { expertise_name: exp.expertise_name },
          defaults: exp,
        });
      })
    );

    // Upsert qualification data
    await Promise.all(
      qualificationData.map(async (qual) => {
        await Qualifications.findOrCreate({
          where: { qualification_name: qual.qualification_name },
          defaults: qual,
        });
      })
    );

    console.log("Seed data has been added successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await sequelize.close();
  }
};

seedData();
