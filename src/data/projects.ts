import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    name: "the ikea® escape- room",
    description:
      "an interactive game, simulating getting thorugh an ikea shopping experience",
    url: "https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-vorticon-vikings/",
    date: "mar.21 2026",
    img: "/projects/ikea.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 2,
    name: "the budgethelp .com application",
    description: "an app helping people balancing their personal budget",
    url: "https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-erik-grahn/",
    date: "feb.13 2026",
    img: "/projects/budgethelp.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 3,
    name: "the morning club menu- page",
    description: "landing page for a fictional restaurant",
    url: "https://medieinstitutet.github.io/fed25d-html-css-inl-2-design-erik-grahn/",
    date: "jan.09 2026",
    img: "/projects/gmc.webp",
    category: ["html", "css"],
  },
  {
    id: 4,
    name: "the 'bookmark' book library",
    description:
      "fullstack project simulting a library-page with full login and database",
    url: "",
    date: "sep.17 2026",
    img: "/projects/bookmark.webp",
    category: ["api", "html", "css", "js"],
  },
  {
    id: 5,
    name: "the mcdonalds® perfume- page",
    description: "what if mcdonalds® started selling perfumes?",
    url: "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-brand-identity/",
    date: "mar.21 2026",
    img: "/projects/mcdonalds.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 6,
    name: "the radio & podcast api- page",
    description:
      "a bespoked page for seeing the swedish radios latest humor podcasts",
    url: "https://medieinstitutet.github.io/fed25d-arbetsmetodik-inl-1-erik-grahn/",
    date: "mar.21 2026",
    img: "/projects/sr.webp",
    category: ["api", "ts"],
  },
  {
    id: 7,
    name: "the erik grahn portfolio",
    description: "hey, it's this exact portfolio-page",
    url: "",
    date: "mar.21 2026",
    img: "",
    category: ["react", "figma"],
  },
];

export default projects;

// available categories: html, css, js, ts, api, figma
