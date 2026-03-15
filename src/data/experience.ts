import { ExperienceProps } from "@/lib/types";

export const EXPERIENCE_TABS = [
  { label: "Work", value: "work" },
  { label: "Education", value: "education" },
];

export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    type: "work",
    date: {
      from: {
        month: 6,
        year: 2025,
      },
      isPresent: true,
    },
    role_type: "Full-time",
    img: "/works/offlens/offlens.png",
    title: "OffLens Tech LLP",
    role: "React Native Dev.",
    location: "Delhi, India",
    description: [
      "Built a full client platform using Next.js, implementing complex UI modules, API integrations, and production-ready features within a one-month development timeline.",
      "Improved the frontend performance of the Unlisted Shares India platform, increasing Lighthouse performance score from 44 → 95 through code optimization, asset loading strategies, and rendering improvements.",
      "Implemented AI-powered Aadhaar and PAN verification workflows with ~99% accuracy, automating identity validation and document processing for user onboarding.",
      "Developed automated document pipelines using Google Drive and Gmail APIs to generate invoices from templates, store them in structured folders, and send them directly to customers.",
      "Built Chrome extensions to scrape and import product data from e-commerce platforms such as Amazon and IKEA, enabling faster product onboarding into internal systems.",
      "Conducted technical interviews for React and frontend engineers, helping evaluate candidates and contribute to scaling the engineering team for new client projects.",
    ],
    link: "https://www.offlensdesign.com/",
    isDarkMode: true,
  },
  {
    type: "work",
    date: {
      from: {
        month: 8,
        year: 2023,
      },
      to: {
        month: 4,
        year: 2025,
      },
      isPresent: false,
    },

    role_type: "Full-time",
    img: "/works/hb/hb.jpeg",
    title: "Hootboard LLC",
    role: "Software Engineer",
    location: "Remote",
    description: [
      "Redesigned and rebuilt the List module (Pinterest-style functionality) in the Hootboard dashboard, improving UI architecture, feature scalability, and user interaction.",
      "Led migration of legacy state management from Redux Thunk to Redux Saga, improving asynchronous flow control, maintainability, and code structure across modules.",
      "Developed reusable pagination components and UI systems, enabling consistent data handling across multiple dashboard features.",
      "Built a reusable List Features SDK used across multiple mobile applications, improving development efficiency and standardizing feature implementation.",
      "Delivered an MVP integrating selfie-based product mockup generation with Shopify product creation, automating the pipeline from image generation to e-commerce checkout for the Selfie App.",
    ],
    link: "https://www.hootboard.com/",
  },
];

export const EDUCATION_DATA = [
  {
    type: "education",
    date: {
      from: {
        month: 10,
        year: 2021,
      },
      to: {
        month: 5,
        year: 2023,
      },
      isPresent: false,
    },
    img: "/educations/altcampus.png",
    title: "AltCampus",
    location: "Dharamshala, India",
    course: "Full Stack Web Development (MERN)",
    link: "https://altcampus.com/",
  },
  {
    type: "education",
    date: {
      from: {
        month: 5,
        year: 2018,
      },
      to: {
        month: 5,
        year: 2021,
      },
      isPresent: false,
    },
    img: "/educations/csjmu.jpg",
    title: "CSJM University",
    location: "Kanpur, India",
    course: "Bachelors of Commerce (Business)",
    link: "https://csjmu.ac.in/",
  },
];
