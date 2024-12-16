import Provider from "./providers.js";
import Expertise from "./expertise.js";
import Qualifications from "./qualifications.js";
import DaySlot from "./day_slots.js";
import TimeSlot from "./time_slots.js";
import ProviderExpertise from "./provider_expertise.js";
import ProviderQualifications from "./provider_qualifications.js";
import ProviderSchedule from "./provider_schedule.js";

// Provider <-> Expertise (Many-to-Many)
Provider.belongsToMany(Expertise, {
  through: ProviderExpertise,
  foreignKey: "provider_id",
  otherKey: "expertise_id",
});
Expertise.belongsToMany(Provider, {
  through: ProviderExpertise,
  foreignKey: "expertise_id",
  otherKey: "provider_id",
});

// Provider <-> Qualification (Many-to-Many)
Provider.belongsToMany(Qualifications, {
  through: ProviderQualifications,
  foreignKey: "provider_id",
  otherKey: "qualification_id",
});
Qualifications.belongsToMany(Provider, {
  through: ProviderQualifications,
  foreignKey: "qualification_id",
  otherKey: "provider_id",
});

// Provider <-> DaySlot (One-to-Many)
Provider.hasMany(DaySlot, { foreignKey: "provider_id" });
DaySlot.belongsTo(Provider, { foreignKey: "provider_id" });

// DaySlot <-> TimeSlot (One-to-Many)
DaySlot.hasMany(TimeSlot, { foreignKey: "day_slot_id" });
TimeSlot.belongsTo(DaySlot, { foreignKey: "day_slot_id" });

//Provider -> ProviderSchedule (One-to-One)
Provider.hasOne(ProviderSchedule, { foreignKey: "provider_id" });
ProviderSchedule.belongsTo(Provider, { foreignKey: "provider_id" });

export {
  Provider,
  ProviderSchedule,
  Expertise,
  Qualifications,
  DaySlot,
  TimeSlot,
  ProviderExpertise,
  ProviderQualifications,
};
