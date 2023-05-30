export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Experience",
    page: "experience",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "About",
    page: "about",
  },
];

export const SKILLS: Array<ISkillItem> = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS/SCSS" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "Typescript" },
  { id: 5, name: "GraphQL" },
  { id: 6, name: "React" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "React Native" },
  { id: 9, name: "Redux" },
  { id: 10, name: "TailwindCSS" },
  { id: 11, name: "Express.js" },
  { id: 12, name: "Nest.js" },
  { id: 13, name: "Firebase" },
  { id: 14, name: "Mongoose" },
  { id: 15, name: "Prisma" },
  { id: 16, name: "MongoDB" },
  { id: 17, name: "PostgreSQL" },
  { id: 18, name: "Git" },
  { id: 19, name: "Postman" },
  { id: 20, name: "REST API" },
  { id: 21, name: "Swagger" },
];

export const EXPERIENCE: Array<IExperienceItem> = [
  {
    role: "Frontend developer",
    organization: "Inquire / EarthLink.com",
    location: "Atlanta, GA (Remotely)",
    period: "Jun 2022 – Apr 2023 (11 mos)",
    description: [
      "Collaborate with cross-functional teams to develop and implement new features, maintain and improve existing applications and create projects from scratch.",
      "Conduct code reviews to ensure that code is efficient, maintainable, and adheres to coding standards and best practices.",
      "Implement and maintain CI/CD processes to ensure that software is built, tested, and deployed reliably and efficiently.",
      "Maintain communication with teams and customers from the US, ensuring that issues are resolved in a timely and professional manner, and that expectations are managed effectively.",
    ],
    image: "",
  },
  {
    role: "Full Stack Developer",
    organization: "Freelance",
    location: "Kyiv, Ukraine",
    period: "Feb 2021 – Jun 2022 (1 yr 5 mos)",
    description: [
      "Develop, implement new functionality in projects from scratch with Typescript, React, Redux, Vue 3, Vuex, Express.js, Next.js, MongoDB, PostreSQL",
      "Communicate regularly with clients to understand their requirements, answer their questions, and provide updates on project progress.",
      "Collaborate with designers, project managers, and other developers to ensure that software projects are delivered on time and meet the clients needs.",
    ],
    image: "",
  },
  {
    role: "Accountant",
    organization: "Self-employed",
    location: "Kyiv, Ukraine",
    period: "Feb 2021 – May 2022 (1 yr 4 mos)",
    description: [
      "Offer comprehensive accounting services to clients, handling tasks such as recording financial transactions, managing accounts payable and receivable, processing payroll. Ensure accuracy, timeliness, and organized financial records",
      "Provide assistance to clients in navigating tax regulations, preparing and filing tax returns, and offering guidance on tax planning strategies. Identify potential deductions or credits, and help clients optimize their tax positions.",
      "Oversee the management of financial data, implementing efficient systems and software for data entry, analysis, and reporting.",
    ],
    image: "",
  },
  {
    role: "Accounting Manager / Audit assistant",
    organization: "INNOVA Consulting GROUP",
    location: "Kyiv, Ukraine",
    period: "Feb 2021 – Jun 2022 (3 yrs 3 mos)",
    description: [
      "Oversee the accounting operations for multiple client accounts, ensuring accurate and timely financial reporting. This may involve managing a team of accountants, reviewing financial transactions, preparing financial statements, and providing guidance on accounting principles and practices.",
      "Assist in conducting audits for client accounts, collaborating with the audit team to gather and analyze financial data, perform audit tests, and ensure compliance with auditing standards and regulations. This may involve preparing audit documentation, assisting in risk assessments, and identifying areas for improvement.",
    ],
    image: "",
  },
];

export const PROJECTS: Array<IProjectItem> = [
  {
    name: "Social media",
    description: "",
    image: "/projects/project-social.png",
    isImageDark: true,
    github: "https://github.com/vasylmiskiv/social-media",
    link: "https://vmiskiv-fssocial-app.onrender.com",
  },
  {
    name: "PromptAI",
    description: "",
    image: "/projects/project-promptai.png",
    isImageDark: false,
    github: "https://github.com/vasylmiskiv/next13-fs-ai-app",
    link: "https://vmiskiv-promptai.vercel.app",
  },
  {
    name: "Ecommerce store",
    description: "eCommerce platform built with the MERN stack & Redux",
    image: "/projects/project-ecommerce.png",
    isImageDark: false,
    github: "https://github.com/vasylmiskiv/ecommerce-client",
    link: "https://vmiskivecommerce.vercel.app",
  },
  {
    name: "FinanceAI",
    description: "",
    image: "/projects/project-financeai.png",
    isImageDark: true,
    github: "https://github.com/vasylmiskiv/financeAI",
    link: "https://vmiskiv-finance-app.onrender.com",
  },
  {
    name: "ChatGPT",
    description: "",
    image: "/projects/project-chatgpt.png",
    isImageDark: true,
    github: "https://github.com/vasylmiskiv/chatgpt-messenger",
    link: "https://vmiskivchatgpt-messenger.vercel.app",
  },
  {
    name: "Realtime Chat with Socket.io",
    description: "",
    image: "/projects/project-realtime-chat.png",
    isImageDark: true,
    github: "https://github.com/vasylmiskiv/fullstack-chat-socketio",
    link: "https://vmiskivchatsocketio.onrender.com/",
  },
  {
    name: "MVP GraphQL Project management app",
    description: "",
    image: "/projects/project-mvpmanagement.png",
    isImageDark: true,
    github: "https://github.com/vasylmiskiv/projectmngmnt-apollo-graphql",
    link: "https://vmiskivgraphqlprojects.onrender.com/",
  },
];
