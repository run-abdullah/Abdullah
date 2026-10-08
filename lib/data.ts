import {
  LuPlane,
  LuMonitor,
  LuCode,
  LuDatabase,
  LuWrench,
  LuNetwork,
  LuTicket,
  LuGlobe,
} from "react-icons/lu";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export const personalInfo = {
  name: "Abdullah Riaz",
  tagline: "IT · Operations · Systems",
  heroGreeting: "Hello",
  heroSubtext: "— It's Abdullah, an IT & Systems Operator",
  email: "ariaz7556@gmail.com",
  phone: "+92 329 8625 816",
  location: "Hafizabad, Punjab, Pakistan",
};

export const stats = [
  { value: "+2", label: "Years Experience" },
  { value: "+3", label: "Roles Worked" },
];

export const aboutText =
  "Versatile professional with practical experience in IT operations, travel and ticketing systems, inventory management, and data handling. Experienced in working with POS and inventory systems, Sabre Interact, airline B2B portals, system operations, and basic IT support. Also completed a MERN Stack development internship, with exposure to modern web development and programming. Comfortable working with operational systems, digital records, and day-to-day technical tasks.";

export const skills = [
  { name: "IT & Systems Operations", icon: LuMonitor },
  { name: "Sabre Interact & GDS", icon: LuPlane },
  { name: "Flight Reservations & Ticketing", icon: LuTicket },
  { name: "Airline B2B Portals", icon: LuGlobe },
  { name: "Inventory & POS Systems", icon: LuDatabase },
  { name: "Data Entry & Microsoft Excel", icon: LuDatabase },
  { name: "IT Hardware Troubleshooting", icon: LuWrench },
  { name: "Basic Network Troubleshooting", icon: LuNetwork },
  { name: "Web Development", icon: LuCode },
  { name: "JavaScript / MERN Stack", icon: LuCode },
];

export const experience = [
  {
    company: "Brilliant Travel",
    role: "Ticketing & Systems Operator",
    period: "July 2026 - Present",
    points: [
      "Processed flight reservations, PNRs, fare pricing, voids, and reissues.",
      "Worked with Sabre Interact and GDS-based ticketing workflows.",
      "Handled bookings through the Ethiopian Airlines B2B portal.",
      "Managed international itineraries and routing for African sectors.",
      "Maintained accurate system entries and daily digital records.",
    ],
  },
  {
    company: "One Stop Grocery",
    role: "IT & Systems Operator",
    period: "2025 - 2026",
    points: [
      "Managed daily POS and inventory system entries.",
      "Updated stock records and assisted with inventory reconciliation.",
      "Maintained accurate digital records and system data.",
      "Provided basic hardware and network troubleshooting.",
      "Supported smooth day-to-day system operations.",
    ],
  },
  {
    company: "Ezitech Institute",
    role: "MERN Stack Intern",
    period: "2025 (3 Months)",
    points: [
      "Gained practical experience with MERN Stack web development.",
      "Worked with JavaScript and modern web development concepts.",
      "Built and worked on web-based applications during the internship.",
      "Practiced frontend and backend development workflows.",
    ],
  },
];

export const education = [
  {
    degree: "Matriculation",
    institute: "BISE Gujranwala",
    period: "2020 - 2022",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

export const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 329 8625 816",
    href: "tel:+923298625816",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "ariaz7556@gmail.com",
    href: "mailto:ariaz7556@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Hafizabad, Punjab, Pakistan",
    href: null,
  },
];

export const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
