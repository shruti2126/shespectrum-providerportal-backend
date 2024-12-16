import { Provider } from "../models/index.js";

export async function testExpertise() {
  try {
    const provider = await Provider.findByPk(1);
    const expertises = await provider.getExpertises();

    console.log("Expertise for the provider: ", expertises);
    process.exit(0);
  } catch (error) {
    console.error("Error fetching expertises: ", error);
    process.exit(1);
  }
}

// testExpertise();
