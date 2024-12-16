import {
  Expertise,
  Provider,
  ProviderExpertise,
  ProviderSchedule,
  Qualifications,
} from "../models/index.js";

export async function testAssociations() {
  try {
    const provider = await Provider.findByPk(1, {
      include: [Expertise, Qualifications, ProviderSchedule],
    });

    // console.log(
    //   "Provider with associations: ",
    //   JSON.stringify(provider, null, 2)
    // );
    process.exit(0);
  } catch (error) {
    console.error("Error fetching provider: ", error);
    process.exit(1);
  }
}

// testAssociations();
