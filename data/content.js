/**
 * Central Content Source for Gorle Balakrishna's Portfolio
 * All text, URLs, and metadata must live here. Never hard-code content in components.
 * 
 * NOTE FOR OWNER:
 * Placeholders needing real links or verification are marked with [PLACEHOLDER_NAME].
 */

export const profile = {
  name: "Gorle Balakrishna",
  title: "Data Science | Software Development",
  intro: "Computer Science & Data Science student who builds analytics dashboards and full-stack web apps.",
  location: "Visakhapatnam, Andhra Pradesh, India",
  languages: ["English", "Telugu", "Hindi"],
  email: "balakrishnagorle2007@gmail.com",
  phone: "+91 8185099015",
  github: "https://github.com/bk-2007",
  linkedin: "[LINKEDIN_URL]", // REPLACE with actual LinkedIn profile URL
  resumePath: "/resume.pdf",
  photoPath: "/photo.jpg",
};

export const about =
  "B.Tech student (Computer Science & Data Science) with hands-on exposure to data preprocessing, data visualization, and student performance prediction reporting. Skilled in Python, SQL, React, Next.js, Node.js, and Git/GitHub, with project experience in analytics dashboards, real-time chat, and full-stack web platforms deployed on Vercel.";

export const skills = [
  {
    group: "Programming Languages",
    accent: "coral",
    items: ["Python", "Java", "C++", "SQL", "JavaScript"],
  },
  {
    group: "Web Technologies",
    accent: "cobalt",
    items: ["React", "Next.js", "Node.js", "HTML", "CSS", "Firebase", "Socket.io"],
  },
  {
    group: "Data Science",
    accent: "teal",
    items: [
      "Data Preprocessing",
      "Data Visualization",
      "Student Performance Prediction",
      "Power BI",
      "Excel",
    ],
  },
  {
    group: "Tools & Platforms",
    accent: "sunny",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "MySQL",
      "Google Sheets",
      "Figma",
      "Canva",
    ],
  },
  {
    group: "Professional Skills",
    accent: "coral",
    items: [
      "Problem Solving",
      "Critical Thinking",
      "Adaptability",
      "Public Speaking",
    ],
  },
];

export const experience = [
  {
    role: "Student Ambassador",
    org: "Unstop",
    period: "Present",
    accent: "sunny",
    points: [
      "Represent Unstop on campus, promoting hackathons, competitions and internship opportunities to fellow students.",
      "Drive student awareness and participation in Unstop events through peer outreach and social media.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "IBM",
    period: "Internship",
    accent: "cobalt",
    points: [
      "Performed data preprocessing to prepare datasets for analysis.",
      "Explored data visualization techniques to communicate patterns and insights.",
      "Created a student performance prediction report estimating whether a student would pass or fail.",
    ],
  },
];

export const projects = [
  {
    id: "nova-cart",
    title: "Nova Cart",
    subtitle: "Local Commerce Intelligence Platform",
    stack: ["Next.js", "React", "Data Visualization"],
    description:
      "Analytics dashboard diagnosing stock-outs, cancellations and churn across 620 partner stores. Includes KPI trends, survey signals, cause-and-effect churn analysis, a scenario simulator and a customer shopping flow. Multi-module architecture (Overview, Inventory, Stores, Operations, Customers, Retention, Promotions, Impact).",
    url: "[NOVA_CART_URL]", // REPLACE with live Nova Cart URL
    accent: "coral",
  },
  {
    id: "chatwave",
    title: "ChatWave",
    subtitle: "Real-Time Chat Application",
    stack: ["Next.js", "Firebase", "Socket.io"],
    description: "Real-time chat web application.",
    url: "[CHATWAVE_URL]", // REPLACE with live ChatWave URL
    accent: "cobalt",
  },
  {
    id: "eventraa",
    title: "Eventraa",
    subtitle: "Event Web Application",
    stack: ["React", "Web Development"],
    description: "Responsive event web application.",
    url: "[EVENTRAA_URL]", // REPLACE with live Eventraa URL
    accent: "sunny",
  },
  {
    id: "alumconnect",
    title: "AlumConnect",
    subtitle: "Job Portal & Alumni Networking Platform",
    stack: ["Next.js", "React", "Tailwind CSS"],
    description:
      "Connects students, alumni and recruiters with job search, application tracking, referrals and mentorship messaging. 10+ responsive pages: dashboard, alumni directory, events, company profiles.",
    url: "[ALUMCONNECT_URL]", // REPLACE with live AlumConnect URL
    accent: "teal",
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Data Science (CSD)",
    institution: "Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam",
    detail: "Currently studying",
    period: "Ongoing",
    accent: "cobalt",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    detail: "94.7%",
    period: "2022 - 2024",
    accent: "coral",
  },
  {
    degree: "SSC",
    institution: "Sri Gurukula Vidyalayam, Palasa",
    detail: "Secondary School Certificate",
    period: "2017 - 2022",
    accent: "sunny",
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development and Data Science",
    issuer: "[CERT_ISSUER: Intrnforte]", // Confirm spelling with owner, resume says 'Intrnforte'
    type: "Certification",
  },
  {
    title: "Basic Python",
    issuer: "HackerRank",
    type: "Certification",
  },
];

export const activities = [
  "College Annual Fest Coordination (SPIRIT), ANITS",
  "Full Stack Web Development and Data Science ([CERT_ISSUER: Intrnforte])",
  "Basic Python, HackerRank",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export const siteMeta = {
  siteUrl: "https://gorlebalakrishna.vercel.app", // Canonical URL for deployment
  title: "Gorle Balakrishna | Data Science & Software Development",
  description:
    "Portfolio of Gorle Balakrishna, B.Tech Computer Science & Data Science student. Discover analytics dashboards, real-time web applications, and full-stack projects.",
  ogImage: "/photo.jpg",
};
