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
      "Led Archd, a multi-franchise design-and-build operations platform, from initialisation to production, including client coordination and project management.",
      "Shipped Archd as a cross-platform React Native iOS/Android app in 2 months (testing + native store release).",
      "Migrated 10 franchises from a legacy data structure: 23 team logins, 6,992 products, 14,071 units, 876 clients.",
      "Conducted technical interviews in for React Native hires on new client's project.",
      "Built a Chrome extension to scrape and import product data from Amazon, Target, Wayfair, Pottery Barn, Kirklands, West Elm, and Linden Creek into Archd inventory.",
      "Implemented AI-powered Aadhaar and PAN (KYC) verification on Unlisted Shares with ~98% accuracy, automating identity validation and document processing for onboarding.",
      "Built Bountiful end-to-end in Next.js 15, TypeScript, TailwindCSS, Axios, React Hook Form, Zod, and Zustand: auth, refresh tokens, protected routes, and a values-based onboarding flow from Figma."
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
