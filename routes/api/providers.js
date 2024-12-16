import express from "express";
import getAllProviders from "../../controllers/providers/getAllProviders.js";
import getProvidersByQualification from "../../controllers/providers/getProvidersByQualification.js";
import getProviderById from "../../controllers/providers/getProviderById.js";
import getProvidersByExpertise from "../../controllers/providers/getProvidersByExpertise.js";
import addProvider from "../../controllers/providers/addProvider.js";
import deleteProvider from "../../controllers/providers/deleteProvider.js";
import loginProvider from "../../controllers/providers/loginProvider.js";

const providerRoutes = express.Router();

//Get all providers
providerRoutes.get("/", getAllProviders);

//Get provider by id
providerRoutes.get("/:id", getProviderById);

//Get providers by expertise
providerRoutes.get("/expertise/:expertise", getProvidersByExpertise);

//Get providers by qualification
providerRoutes.get(
  "/qualification/:qualification",
  getProvidersByQualification
);

// Add new provider
providerRoutes.post("/", addProvider);

//login provider
providerRoutes.post("/login", loginProvider);
//delete provider
providerRoutes.delete("/:id", deleteProvider);

export default providerRoutes;
