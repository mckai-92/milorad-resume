export type Data = typeof data;

export const data = {
  site: {
    title: "Milorad Đerić - Resume",
    description: "Milorad Đerić - Resume, CV, Portfolio",
  },
  name: "Milorad Đerić",
  email: "djericmilorad@hotmail.rs",
  tel: "+381695506292",
  linkedin: "https://www.linkedin.com/in/miloraddjeric/",
  github: "https://github.com/mckai-92",
  location: "Belgrade",

  lang: {
    rs: {
      location: "Beograd",
      tel: "069 550 62 92",
      headings: {
        work_experience: "Radno Iskustvo",
        skills: "Veštine",
        education: "Obrazovanje",
      },

      school: {
        name: "Visoka škola elektrotehnike i računarstva strukovnih studija - Beograd",
        url: "https://www.viser.edu.rs/",
      },
      languages: ["Srpski", "Engleski"],
      jobs: [
        {
          role: "Frontend Developer",
          company: {
            name: "Onedb Service Delivery Ltd",
            url: "https://www.onedb.online/",
          },
          date: "2017 - danas",
          heading:
            "Razvoj i održavanje Onedb sistema koji omogućava kreiranje aplikacija bez kodiranja.",
          items: [
            "Razvoj širokog spektra LitElement Web Components korišćenih u OneDB platformi.",
            "Izrada naprednih UI modula kao što su forme, tabele, dashboardi, konfiguracioni paneli i vizuelni alati.",
            "Integracija frontend funkcionalnosti (JavaScript) sa OneDB API-jem, workflow-ovima i real-time modelima podataka.",
            "Saradnja sa backend i UX timovima na razvoju novih funkcionalnosti.",
            "Obezbeđivanje pristupačnosti, responzivnosti i kompatibilnosti u svim modernim pregledačima.",
          ],
        },
        {
          role: "JavaScript Developer",
          company: {
            name: "M4 Systems Ltd",
            url: "https://www.linkedin.com/company/m4-systems-ltd/",
          },
          date: "2015 - 2017",
          heading:
            "Razvoj korisničkih aplikacija koristeći ExtJS na frontend-u i Node.js na backend-u.",
          items: [
            "Kreiranje dinamičkih UI komponenti, formi, tabela i custom widget-a u ExtJS MVC/MVVM arhitekturi.",
            "Razvoj backend funkcionalnosti u Node.js-u (API endpointi, logika aplikacije, obrada podataka).",
          ],
        },
      ],
      skills: {
        frontend: {
          name: "Frontend / Web",
          items: [
            "LitElement, Web Components, Shadow DOM",
            "JavaScript",
            "HTML5, CSS3",
            "ExtJS",
          ],
        },
        familiar: {
          name: "Poznavanje",
          items: ["React"],
        },
        backend: {
          name: "Backend & Tools",
          items: ["Node.js", "REST APIs, JSON", "Git, NPM"],
        },
        other: {
          name: "Other",
          items: [
            "UX saradnja",
            "Optimizacija performansi i debugging",
            "Responzivan i cross-browser dizajn",
          ],
        },
      },
    },
    en: {
      location: "Belgrade",
      tel: "+381 69 550 62 92",
      headings: {
        work_experience: "Work Experience",
        skills: "Skills",
        education: "Education",
      },
      school: {
        name: "School of Electrical and Computer Engineering - Belgrade",
        url: "https://www.viser.edu.rs/",
      },
      languages: ["English", "Serbian"],
      jobs: [
        {
          role: "Frontend Developer",
          company: {
            name: "Onedb Service Delivery Ltd",
            url: "https://www.onedb.online/",
          },
          date: "2017 - present",
          heading:
            "Developing and maintaining Onedb system which provides No Code - Point & Click application development.",
          items: [
            "Developed a wide range of LitElement-based Web Components used across the OneDB platform.",
            "Built interactive UI modules for forms, tables, dashboards, configuration tools, and visualization components.",
            "Integrated OneDB platform features with dynamic frontend elements using JavaScript, REST APIs, and real-time data models.",
            "Collaborated with backend and UX teams to deliver new OneDB features and improvements.",
            "Ensured cross-browser compatibility, accessibility, and responsive design across all components.",
          ],
        },
        {
          role: "JavaScript Developer",
          company: {
            name: "M4 Systems Ltd",
            url: "https://www.linkedin.com/company/m4-systems-ltd/",
          },
          date: "2015 - 2017",
          heading:
            "Developed customer-facing applications using ExtJS for the frontend and Node.js for backend services.",
          items: [
            "Built dynamic UI components, forms, data grids, and custom widgets in ExtJS MVC/MVVM structure.",
            "Created backend features in Node.js, including API endpoints, business logic, and data handling.",
          ],
        },
      ],
      skills: {
        frontend: {
          name: "Frontend / Web",
          items: [
            "LitElement, Web Components, Shadow DOM",
            "JavaScript",
            "HTML5, CSS3",
            "ExtJS",
          ],
        },
        familiar: {
          name: "Familiar With",
          items: ["React"],
        },
        backend: {
          name: "Backend & Tools",
          items: ["Node.js", "REST APIs, JSON", "Git, NPM"],
        },
        other: {
          name: "Other",
          items: [
            "UX collaboration",
            "Performance optimization & debugging",
            "Responsive & cross-browser design",
          ],
        },
      },
    },
  },
};
