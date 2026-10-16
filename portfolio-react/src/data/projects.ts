type Project = {
  id: number;
  name: string;
  date: string;
  img: string;
  category: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "the ikea® escape- room",
    date: "mar.21 2026",
    img: "../public/projects/ikea.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 2,
    name: "the budgethelp .com application",
    date: "feb.13 2026",
    img: "../public/projects/budgethelp.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 3,
    name: "the morning club menu- page",
    date: "jan.09 2026",
    img: "../public/projects/gmc.webp",
    category: ["html", "css"],
  },
  {
    id: 4,
    name: "the 'bookmark' book library",
    date: "sep.17 2026",
    img: "../public/projects/bookmark.webp",
    category: ["api", "html", "css", "js"],
  },
  {
    id: 5,
    name: "the mcdonalds® perfume- page",
    date: "mar.21 2026",
    img: "../public/projects/mcdonalds.webp",
    category: ["html", "css", "ts"],
  },
  {
    id: 6,
    name: "the radio & podcast api- page",
    date: "mar.21 2026",
    img: "../public/projects/sr.webp",
    category: ["api", "ts"],
  },
  {
    id: 7,
    name: "the erik grahn portfolio",
    date: "mar.21 2026",
    img: "",
    category: ["react", "figma"],
  },
];

export default projects;

// available categories: html, css, js, ts, api, figma
