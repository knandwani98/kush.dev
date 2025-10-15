import { ExperienceProps } from "@/lib/types";

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
    img: "/works/offlens/offlens.jpeg",
    title: "OffLens Tech LLP",
    role: "React Native Developer",
    location: "Delhi, India",
    projects: [
      {
        title: "Unlisted Shares of India",
        image: "/works/offlens/bountiful.png",
        links: {
          github: "",
          live: "",
        },
        description: [
          "Developed and maintained document automation features in the Sales Dashboard.",
          "Integrated Google Drive for seamless upload and organization of client documents.",
          "Built 99% accurate validation for client and dealer document verification.",
          "Automated invoice generation using Google Docs and Gmail API to streamline workflow.",
        ],
      },
      {
        title: "Bountiful",
        image: "/works/offlens/bountiful.png",
        links: {
          github: "",
          live: "",
        },
        description: [
          "Built a values-driven stock discovery web app using Next.js, TypeScript, and TailwindCSS.",
          "Developed secure authentication, onboarding flow, and protected routes.",
          "Translated Figma designs into responsive, reusable components and themes.",
          "Implemented dynamic dashboard and forms for personalized user experiences.",
        ],
      },
      {
        title: "Offlens Tattoo Generator",
        image: "",
        links: {
          github: "",
          live: "",
        },
        description: [
          "Built a cross-platform React Native app with AI-powered tattoo generation.",
          "Integrated Google login and optimized media handling using Expo Camera and NativeWind.",
          "Developed AR-based tattoo previews for real-time user visualization.",
          "Ensured consistent deep linking and smooth performance across devices.",
        ],
      },
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
    projects: [
      {
        title: "List Functionality Feature (Web & Mobile)",
        image: "",
        links: {
          github: "",
          live: "",
        },
        description: [
          "Lead development of a cross-platform list feature for Hootboard web and mobile apps",
          "Enable users to save, organize, and access hoots seamlessly across platforms",
          "Build the feature from scratch using React, React Native, TailwindCSS, and TypeScript",
          "Integrate Redux Saga and a custom List SDK for scalable and reusable code",
          "Implement feature restriction mechanisms to manage pro service access",
          "Improve resource management and user experience through usage-based controls",
        ],
      },
      {
        title: "Selfie App Enhancements",
        image: "",
        links: {
          github: "",
          live: "",
        },
        description: [
          "Design and implement Selfie Print automation for the Hootboard Selfie App",
          "Allow users to email selfies with mug mockups and one-click “Buy Now” Shopify links",
          "Build a demographic survey feature to capture origin, group size, and visit purpose",
          "Manage end-to-end development including UI design, flows, HLD/LLD, and database",
          "Maintain and enhance backend endpoints to support seamless feature integration",
          "Achieve 60% survey participation while sustaining high user engagement",
        ],
      },
    ],
    link: "https://www.hootboard.com/",
  },
];
