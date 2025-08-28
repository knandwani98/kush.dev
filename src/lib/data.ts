export const NAV_DATA = [
  { label: "home", path: "/" },
  { label: "projects", path: "/projects" },
  { label: "contact", path: "/contact" },
];

export const PROJECTS_DATA = [
  {
    date: {
      month: 3,
      year: 2024,
    },
    img: "/projects/pixa.png",
    title: "Pixa",
    isDarkMode: true,
    description: "Beautiful High Resolution Images Downloading Web App.",
    tags: ["Dark Theme", "Shadcn", "TailwindCSS", "Infinite-Scrolling"],
    links: {
      github: "https://github.com/knandwani98/pixa",
      live: "https://pixa-images.vercel.app/",
    },
  },
  {
    date: {
      month: 12,
      year: 2023,
    },
    img: "/projects/hijingo.png",
    title: "Hi-Jingo!",
    description: "A Traditional Japanese Board Game with Modern Twist",
    tags: ["NextJS", "Lucid Icons", "Shadcn", "TailwindCSS"],
    links: {
      github: "https://github.com/knandwani98/hi-jingo",
      live: "https://hi-jingo.vercel.app",
    },
  },
  {
    date: {
      month: 10,
      year: 2024,
    },
    img: "/projects/chartify.png",
    title: "Chartify",
    description:
      "The Chartify Dashboard is an interactive platform designed to track and visualize the top 10 trending cryptocurrencies.",
    tags: ["NextJS", "Recharts", "Shadcn", "TailwindCSS", "Responsive Layout"],
    links: {
      github: "https://github.com/knandwani98/chartify",
      live: "https://chartify-iota.vercel.app/bitcoin",
    },
  },
  {
    date: {
      month: 1,
      year: 2024,
    },
    img: "/projects/calculator.png",
    title: "Compound Calculator",
    description:
      "A High-end Complex Compound Calculator with both yearly and monthly breakdowns",
    tags: ["NextJS", "Lucid Icons", "Shadcn", "TailwindCSS"],
    links: {
      github: "https://github.com/knandwani98/sip-calculator",
      live: "https://k-compound-calculator.vercel.app",
    },
  },

  {
    date: {
      month: 8,
      year: 2023,
    },
    img: "/projects/weatherwise.png",
    title: "WeatherWise",
    description:
      "A simple Weather Forecasting Web App with Live Location enable",
    tags: ["Live Location", "React", "OpenWeather API"],
    links: {
      github: "https://github.com/knandwani98/weatherwise",
      live: "https://weather-wise-umber.vercel.app/",
    },
  },
  {
    date: {
      month: 3,
      year: 2023,
    },
    img: "/projects/quiz.png",
    title: "Quiz App",
    description:
      "A High-end Quiz App which contains three different levels of difficulties",
    tags: ["React", "SCSS", "Table"],
    links: {
      github: "https://github.com/knandwani98/quiz-app",
      live: "https://knandwani98.github.io/quiz-app/",
    },
  },
  {
    date: {
      month: 7,
      year: 2023,
    },
    img: "/projects/ss.png",
    title: "Streetstyle",
    description:
      "A modern complex e-commerce web app but still needs some work",
    tags: ["React", "SCSS"],
    links: {
      github: "https://github.com/knandwani98/shop-shop",
      live: "https://shopshop-rho.vercel.app/",
    },
  },
  {
    date: {
      month: 6,
      year: 2023,
    },
    img: "/projects/gh.png",
    title: "Github Battle App",
    description:
      "A app which compares two different github account and can compete with scores",
    tags: ["React", "SCSS", "Github API"],
    links: {
      github: "https://github.com/knandwani98/gh-battle-app",
      live: "https://knandwani98.github.io/gh-battle-app/",
    },
  },
  {
    date: {
      month: 4,
      year: 2023,
    },
    img: "/projects/code.png",
    title: "A Code Editor",
    description: "A real time HTML & CSS editor",
    tags: ["React", "SCSS", "Github API"],
    links: {
      github: "https://github.com/knandwani98/code-editor",
      live: "https://knandwani98.github.io/code-editor/",
    },
  },
];

export const EXPERIENCE_DATA = [
  {
    date: {
      from: {
        month: 6,
        year: 2025,
      },
      isPresent: true,
    },
    img: "/works/offlens.jpeg",
    title: "OffLens Studio",
    role: "React Native Developer",
    location: "Delhi, India",
    projects: [
      {
        title: "Bountiful",
        description: `Developed a values-driven stock discovery web application using Next.js 15, TypeScript,
TailwindCSS, Axios, React Hook Form, Zod, and Zustand. Implemented end-to-end frontend features, including
secure authentication, refresh token handling, and protected routes. Translated Figma designs into pixel-
perfect, responsive UI, delivering a smooth onboarding flow that personalises stock suggestions based on user
values.`,
      },
      {
        title: "Offlens Tattoo Generator",
        description: `Built a cross-platform iOS React Native application with deep linking consistent with
the web app. Designed and implemented secure authentication flows, including Google login, and optimised
media handling using Expo Camera and NativeWind. Utilised Zod for form validation and Zustand for state
management. Developed AI-powered tattoo generation features with re-generation options and AR-powered
previews, enabling users to visualise tattoos on their skin in real-time for confident decision-making.`,
      },
    ],
    link: "https://www.offlensdesign.com/",
    isDarkMode: true,
  },
  {
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
    img: "/works/hb.jpeg",
    title: "Hootboard LLC",
    role: "Software Engineer",
    location: "Remote",
    projects: [
      {
        title: "List Functionality Feature (Web & Mobile)",
        description: `Led development of a list feature across Hootboard web and mobile
apps, enabling users to save, organise, and access hoots seamlessly. Built the feature from scratch using React
and React Native, TailwindCSS, TypeScript, Redux Saga, and a custom List SDK, ensuring clean, maintainable,
and reusable code across multiple projects. Implemented a feature restriction mechanism to prevent access to
pro services or native apps after exceeding allotted engagement units, improving resource management and
user experience.`,
      },
      {
        title: "Selfie App Enhancements",
        description: `Designed and implemented Selfie Print automation for the Hootboard Selfie App,
allowing users to click and email selfies with a mug mockup image with a one-click “Buy Now” Shopify link.
Executed a demographic survey feature prompting users for origin, group size, and purpose of visit. Managed
end-to-end development, including UI design, user flows, HLD/LLD, endpoint maintenance, and database
management, achieving 60% survey participation while maintaining engagement.`,
      },
    ],
    link: "https://www.hootboard.com/",
  },
];

export const EDUCATION_DATA = [
  {
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
    title: "AltCampus at Dharamshala, India",
    course: "Full Stack Web Development (MERN)",
    link: "https://altcampus.com/",
  },
  {
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
    title: "CSJM University at Kanpur, India",
    course: "Bachelors of Commerce (Business)",
    link: "https://csjmu.ac.in/",
  },
];

export const TECH_STACK_DATA = [
  {
    label: "HTML",
    icon: "/stack/html.svg",
    color: "#F16529",
  },
  {
    label: "CSS",
    icon: "/stack/css.svg",
    color: "#31AADD",
  },
  {
    label: "Javascript",
    icon: "/stack/js.svg",
    color: "#FFCA26",
  },
  {
    label: "Typescript",
    icon: "/stack/ts.svg",
    color: "#3077C6",
  },
  {
    label: "Next.js",
    icon: "/stack/next.svg",
    color: "#FFFFFF",
    invert: true,
  },
  {
    label: "React",
    icon: "/stack/react.svg",
    color: "#52C1DE",
  },
  {
    label: "React Native",
    icon: "/stack/react.svg",
    color: "#52C1DE",
  },
  {
    label: "Node.js",
    icon: "/stack/node.svg",
    color: "#539E43",
  },
  {
    label: "Express",
    icon: "/stack/express.svg",
    color: "#FFFFFF",
    invert: true,
  },
  {
    label: "Mongo DB",
    icon: "/stack/mongodb.svg",
    color: "#449C45",
  },
  {
    label: "Tailwind CSS",
    icon: "/stack/tailwind.svg",
    color: "#43A8B3",
  },
  {
    label: "SASS",
    icon: "/stack/sass.svg",
    color: "#CB6599",
  },
  {
    label: "Redux",
    icon: "/stack/redux.svg",
    color: "#764ABC",
  },
  {
    label: "Firebase",
    icon: "/stack/firebase.svg",
    color: "#FCCA3F",
  },
  {
    label: "GIT",
    icon: "/stack/git.svg",
    color: "#ED503A",
  },
  {
    label: "Postman",
    icon: "/stack/postman.svg",
    color: "#FE6C37",
  },
  {
    label: "Figma",
    icon: "/stack/figma.svg",
    color: "#0DCF82",
  },
];
