import axios from "axios";

const dummyProviders = [
  {
    username: "Dr. John Doe",
    mobileNumber: "9876543210",
    email: "johndoe@example.com",
    password: "password123",
    service: "General Physician",
    experienceInYears: 8,
    calendarType: "Google",
    googleCalendarId: "johndoe123@group.calendar.google.com",
  },
  {
    username: "Dr. Jane Smith",
    mobileNumber: "9123456780",
    email: "janesmith@example.com",
    password: "password123",
    service: "Pediatrics",
    experienceInYears: 5,
    calendarType: "Manual",
  },
  {
    username: "Dr. Emily Davis",
    mobileNumber: "9988776655",
    email: "emilydavis@example.com",
    password: "password123",
    service: "Dermatology",
    experienceInYears: 10,
    calendarType: "Outlook",
    outlookCalendarId: "emilydavis@outlook.com",
  },
  {
    username: "Dr. Michael Lee",
    mobileNumber: "9876509876",
    email: "michaellee@example.com",
    password: "password123",
    service: "Orthopedics",
    experienceInYears: 12,
    calendarType: "Calendly",
    calendlyLink: "https://calendly.com/michaellee",
  },
  {
    username: "Dr. Sarah Wilson",
    mobileNumber: "9876598765",
    email: "sarahwilson@example.com",
    password: "password123",
    service: "Psychiatry",
    experienceInYears: 7,
    calendarType: "Google",
    googleCalendarId: "sarahwilson@group.calendar.google.com",
  },
  {
    username: "Dr. David Brown",
    mobileNumber: "9123456789",
    email: "davidbrown@example.com",
    password: "password123",
    service: "Cardiology",
    experienceInYears: 15,
    calendarType: "Manual",
  },
  {
    username: "Dr. Olivia Taylor",
    mobileNumber: "8765432109",
    email: "oliviataylor@example.com",
    password: "password123",
    service: "Endocrinology",
    experienceInYears: 9,
    calendarType: "Calendly",
    calendlyLink: "https://calendly.com/oliviataylor",
  },
  {
    username: "Dr. James Johnson",
    mobileNumber: "8987654321",
    email: "jamesjohnson@example.com",
    password: "password123",
    service: "Gastroenterology",
    experienceInYears: 10,
    calendarType: "Outlook",
    outlookCalendarId: "jamesjohnson@outlook.com",
  },
  {
    username: "Dr. Sophia Martinez",
    mobileNumber: "8098765432",
    email: "sophiamartinez@example.com",
    password: "password123",
    service: "Obstetrics and Gynecology",
    experienceInYears: 6,
    calendarType: "Google",
    googleCalendarId: "sophiamartinez@group.calendar.google.com",
  },
  {
    username: "Dr. William Clark",
    mobileNumber: "8675309867",
    email: "williamclark@example.com",
    password: "password123",
    service: "Neurology",
    experienceInYears: 11,
    calendarType: "Manual",
  },
];

const registerProviders = async () => {
  try {
    for (const provider of dummyProviders) {
      const res = await axios.post(
        "http://localhost:5000/api/providers",
        provider
      );
      console.log(`Registered: ${provider.username}`);
    }
  } catch (error) {
    console.error("Error registering providers:", error);
  }
};

registerProviders();
