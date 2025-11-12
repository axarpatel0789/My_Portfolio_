export const resume = {
  name: "Akash Mungase",
  role: "Frontend Developer",
  experienceYears: 3.5,
  summary:
    "Frontend Developer with multi-framework experience (Angular, Vue, Next.js) and full‑stack exposure. I build performant, maintainable UIs using TypeScript and modern best practices.",
  experience: [
    {
      title: "Full-Stack Developer",
      period: "2022 – Present",
      highlights: [
        "Delivered full-stack features end-to-end using modern web stacks",
        "Improved API integration patterns and CI/CD flows",
      ],
    },
    {
      title: "Front-End Developer",
      period: "Aug 2021 – Oct 2022",
      highlights: [
        "Focused on frontend architecture, modular components and performance",
      ],
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["Next.js", "React", "Angular", "Vue.js", "Redux", "Vuex"],
    tools: ["Git/GitHub", "SVN", "Jira", "Webpack", "Vite", "Excel.js"],
    practices: ["Performance", "Reusability", "Accessibility", "Security", "CI/CD"],
  },
  projects: [
    {
      id: "lets-recycle",
      title: "Let's Recycle",
      tech: ["Angular 11", "Reactive Forms", "Lazy Loading", "HTTP Interceptors", "SVN"],
      summary:
        "A large-scale Angular app to streamline recycling workflows and data export for municipal clients.",
    },
    {
      id: "ims",
      title: "IMS",
      tech: ["Vue.js 2", "Vuex", "Dynamic Forms", "Excel.js"],
      summary:
        "Inventory Management System with dynamic forms, dashboards and Excel import/export capabilities.",
    },
  ],
  contact: {
    email: "akash@example.com",
    location: "Your City, Country",
  },
} as const;
export type Resume = typeof resume;
