import { Provider } from "../../models/index.js";

const loginProvider = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Email: ", email, "Password: ", password);
    const provider = await Provider.findOne({ where: { email } });
    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }
    return res.status(200).json(provider);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error logging in provider. Please try again." });
  }
};

export default loginProvider;
