export const NAV_DATA = [
  { label: "home", path: "/" },
  { label: "projects", path: "/projects" },
  { label: "contact", path: "/contact" },
];

export const PROJECTS_DATA = [
  {
    date: {
      month: "October",
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
      month: "March",
      year: 2024,
    },
    img: "/projects/pixa.png",
    title: "Pixa",
    description: "Beautiful High Resolution Images Downloading Web App.",
    tags: ["Dark Theme", "Shadcn", "TailwindCSS", "Infinite-Scrolling"],
    links: {
      github: "https://github.com/knandwani98/pixa",
      live: "https://pixa-images.vercel.app/",
    },
  },
  {
    date: {
      month: "January",
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
      month: "December",
      year: 2023,
    },
    img: "/projects/hijingo.png",
    title: "Hi!Jingo",
    description: "A Traditional Japanese Board Game with Modern Twist",
    tags: ["NextJS", "Lucid Icons", "Shadcn", "TailwindCSS"],
    links: {
      github: "https://github.com/knandwani98/hi-jingo",
      live: "https://hi-jingo.vercel.app",
    },
  },
  {
    date: {
      month: "August",
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
      month: "March",
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
      month: "July",
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
      month: "June",
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
      month: "April",
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
        month: "August",
        year: 2023,
      },
      to: {
        month: "September",
        year: 2024,
      },
      isPresent: false,
    },
    img: "/works/hb.jpeg",
    title: "Hootboard",
    role: "Software Engineer (Remote)",
    description: [
      "An automated Selfie Print feature for the Hootboard Selfie App, which allowed users to buy mugs with their selfies on, managed on Shopify and was completed in two weeks.",
      "I led the development of a List Feature for the Hootboard web and mobile apps, managing both front-end and back-end tasks and gaining valuable React Native experience.",
    ],
    link: "https://www.hootboard.com/",
  },
];

export const EDUCATION_DATA = [
  {
    date: {
      from: {
        month: "October",
        year: 2021,
      },
      to: {
        month: "May",
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
        month: "May",
        year: 2019,
      },
      to: {
        month: "May",
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
