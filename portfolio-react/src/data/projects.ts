type Project = {
  id: number;
  name: string;
  description: string;
  date: string;
  img: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "the ikea® escape- room",
    description:
      "an interactive game, simulating getting thorugh an ikea shopping experience",
    date: "mar.21 2026",
    img: "../public/projects/ikea.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 2,
    name: "the budgethelp .com application",
    description: "an app helping people balancing their personal budget",
    date: "feb.13 2026",
    img: "../public/projects/budgethelp.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 3,
    name: "the morning club menu- page",
    description: "landing page for a fictional restaurant",
    date: "jan.09 2026",
    img: "../public/projects/gmc.webp",
    category: ["html", "css"],
  },
  {
    id: 4,
    name: "the 'bookmark' book library",
    description:
      "fullstack project simulting a library-page with full login and database",
    date: "sep.17 2026",
    img: "../public/projects/bookmark.webp",
    category: ["api", "html", "css", "js"],
  },
  {
    id: 5,
    name: "the mcdonalds® perfume- page",
    description: "what if mcdonalds® started selling perfumes?",
    date: "mar.21 2026",
    img: "../public/projects/mcdonalds.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 6,
    name: "the radio & podcast api- page",
    description:
      "a bespoked page for seeing the swedish radios latest humor podcasts",
    date: "mar.21 2026",
    img: "../public/projects/sr.webp",
    category: ["api", "ts"],
  },
  {
    id: 7,
    name: "the erik grahn portfolio",
    description: "hey, it's this exact portfolio-page",
    date: "mar.21 2026",
    img: "",
    category: ["react", "figma"],
  },
];

export default projects;

// available categories: html, css, js, ts, api, figma
