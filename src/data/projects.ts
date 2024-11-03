import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "My portfolio",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Netlify"],
    image: {
      LIGHT: "/images/projects/portfolioLight.webp",
      DARK: "/images/projects/portfolioDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Challenges",
    href: "/projects",
    tags: [
      "HTML ",
      "CSS",
      "Tailwindcss",
      "Scss",
      "ReactJS",
      "Vercel",
      "Netlify",
    ],
    image: {
      LIGHT: "/images/projects/Challanges2.webp",
      DARK: "/images/projects/Challange1.webp",
    },
  },
  {
    index: 2,
    title: "Toggle Switcher",
    href: "/projects",
    tags: ["HTML", "CSS", "Tailwindcss", "Netlify", "React DND"],
    image: {
      LIGHT: "/images/projects/AM.webp",
      DARK: "/images/projects/PM.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/aamna-ansari/Portfolio_aaMna",
    liveWebsiteHref: "https://aamnansari.vercel.app/",
  },
  {
    name: "Calculator",
    favicon: "/images/projects/logos/calculator.ico",
    imageUrl: ["/images/projects/CalculatorLight.webp"],
    description:
      "Create a JavaScript calculator using the JavaScript, HTML, and CSS programming languages. It should perform addition, subtraction, division, and modulus operations.",
    sourceCodeHref: "https://github.com/aamna-ansari/Project-03",
    liveWebsiteHref: "https://project-03-jet.vercel.app/",
  },
  {
    name: "Toggle Switcher",
    favicon: "/images/projects/logos/Toggle.ico",
    imageUrl: ["/images/projects/AM.webp", "/images/projects/PM.webp"],
    description:
      "Discover a sleek toggle button interface for seamless 'on' and 'off' state transitions. Perfect for intuitive web interactions, integrating HTML, CSS, and JavaScript effortlessly enhances user control.",
    sourceCodeHref: "https://github.com/aamna-ansari/ProjectNo03",
    liveWebsiteHref: "https://project-no03.vercel.app/",
  },
  {
    name: "Many Challenges",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Challanges2.webp",
      "/images/projects/periodicTable.PNG",
      "/images/projects/Challange1.webp",
      "/images/projects/frontmentor.webp",
      
    ],
    description:
      "Many short and fun games/ Challanges using HTML, CSS, Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/aamna-ansari/ChallengeYourCode",
    liveWebsiteHref: "https://03-periodictable.netlify.app/",
  },
];
