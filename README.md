# React Portfolio

A personal portfolio built with **React, TypeScript, Vite and Tailwind CSS** as part of the JS Frameworks course at Medieinstitutet.

The project focuses on building a single-page portfolio while working with React components, props, state management and form validation.

PS. Try pressing the toggle within the word "PORTFOLIO"

---

## Tech Stack

**Design**

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

**Hosting & Version Control**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/erik-grahn/FED25D_REACT_PORTFOLIO.git
```

**2. Navigate to the project directory**

```bash
cd FED25D_REACT_PORTFOLIO
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

---

## Links

- **Live Portfolio:** [View website](https://fed-25-d-react-portfolio-portfolio-react-o8s0babif-granka.vercel.app/)
- **Figma Design:** [View design in Figma](https://www.figma.com/design/XMe5hRXwPpAlSz7nJrQgaA/Erik-s-Portfolio-FED?node-id=0-1&p=f&t=4O6KuLQ89s1SpOrn-0)
- **GitHub Repository:** [View source code](https://github.com/erik-grahn/FED25D_REACT_PORTFOLIO)

---

## Reflektion

### Komponenter och state

Webbplatsen är uppbyggd av flera mindre komponenter som tillsammans bildar en sida. `App` samlar de olika delarna, som navigering, startsida, innehåll, kontaktformulär och footer. Större delar har egna komponenter, medan mindre delar som `ProjectCard`, `ThemeToggle` och `ScrollReveal` kan återanvändas. Projektens information ligger separat i en egen fil och visas med hjälp av komponenter. På så sätt hålls innehållet skilt från hur det visas på sidan.

Varje komponent hanterar sin egen state, alltså den information som kan ändras när användaren interagerar med sidan. `Navigation` håller koll på om menyn är öppen, `Hero` hanterar temaväxlingen och `Projects` håller koll på vilka filter som är valda. Kontaktformuläret sparar det användaren skriver in och hanterar eventuella felmeddelanden och bekräftelse när formuläret har skickats. Information som kan räknas fram, till exempel filtrerade projekt, sparas inte i onödan utan tas fram när den behövs. Temat uppdateras med hjälp av `useEffect`, och props används för att skicka information mellan komponenter.

### Vad hade jag gjort annorlunda?

I det här projektet försökte jag dela upp arbetet i två steg: först design och sedan kod. Det hjälpte mig att fokusera på rätt saker, istället för att exempelvis fastna i färgval när jag egentligen borde arbeta med formulärvalidering.

Något jag däremot behöver bli bättre på är att läsa uppgiftsbeskrivningen och kraven noggrant från början. Jag missade vissa delar som behövde finnas med på sidan och fick därför lösa dem i slutet av projektet. Det gjorde att slutresultatet inte blev så sammanhängande som jag hade önskat.

Framöver vill jag därför utgå mer från kravlistan när jag planerar designen, så att jag kan vara kreativ utan att tappa riktningen.

### AI i arbetet

I det här projektet har jag försökt använda AI så lite som möjligt och istället utgå från kursmaterial, genomgångar och egna sökningar, exempelvis på YouTube. Jag vill i första hand försöka lösa problemen själv och förstå hur saker fungerar.

När jag använder AI är det främst för att få hjälp med styling, animationer som inte fungerar som tänkt eller för att anpassa befintlig kod. Jag försöker alltid testa förslagen jag får och vara kritisk till dem, istället för att använda dem utan att förstå hur de fungerar.
