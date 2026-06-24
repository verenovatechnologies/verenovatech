export const SLIDES = [
  {
    eyebrow: "IT Solutions Startup",
    heading: ["We build software", "that actually ships."],
    desc: "VereNova Technologies is a lean, fast-moving technology company. We design and develop custom software, web platforms, and digital products — built to solve real business problems.",
    primary: { label: "Start a Project →", href: "#contact" },
    secondary: { label: "Our Services", href: "#services" },
  },
  {
    eyebrow: "Web & App Development",
    heading: ["Modern web apps", "built to perform."],
    desc: "From responsive websites to full-scale enterprise web applications — we build fast, scalable, and beautiful digital experiences your users will love.",
    primary: { label: "Explore Services →", href: "#services" },
    secondary: { label: "Get a Quote", href: "#contact" },
  },
  {
    eyebrow: "Data & Business Intelligence",
    heading: ["Smarter decisions", "powered by data."],
    desc: "We build intelligent dashboards, data pipelines, and analytics systems that turn raw business data into clear, actionable insights for your team.",
    primary: { label: "Let's Talk →", href: "#contact" },
    secondary: { label: "About Us", href: "#about" },
  },
  {
    eyebrow: "Dedicated IT Teams",
    heading: ["Your tech partner,", "not just a vendor."],
    desc: "We become an extension of your team — transparent, accountable, and invested in your success. Direct access to your developer, always.",
    primary: { label: "How We Work →", href: "#how" },
    secondary: { label: "Hire Us", href: "#contact" },
  },
  {
    eyebrow: "Startups & Enterprises",
    heading: ["From MVP to scale —", "we grow with you."],
    desc: "Whether you're launching your first product or scaling an enterprise platform, we bring the engineering depth and startup speed to get you there.",
    primary: { label: "Start Today →", href: "#contact" },
    secondary: { label: "Client Stories", href: "#testimonials" },
  },
];

export const HERO_GRADIENTS = [
  "linear-gradient(160deg, rgba(124,58,237,0.75), rgba(45,15,90,0.88)), radial-gradient(circle at 75% 30%, #4c1d95 0%, #1e0a3c 70%)",
  "linear-gradient(160deg, rgba(147,51,234,0.7), rgba(35,10,75,0.9)), radial-gradient(circle at 25% 70%, #5b21b6 0%, #190734 70%)",
  "linear-gradient(160deg, rgba(168,85,247,0.65), rgba(40,12,80,0.88)), radial-gradient(circle at 60% 20%, #6d28d9 0%, #1c0838 70%)",
  "linear-gradient(160deg, rgba(124,58,237,0.7), rgba(30,8,65,0.9)), radial-gradient(circle at 30% 30%, #581c87 0%, #160730 70%)",
  "linear-gradient(160deg, rgba(147,51,234,0.7), rgba(38,11,78,0.88)), radial-gradient(circle at 70% 75%, #6b21a8 0%, #190734 70%)",
];

export const TRUST_ITEMS = [
  { icon: "⚡", text: "Fast turnaround on every project" },
  { icon: "🔒", text: "Secure, scalable architecture" },
  { icon: "🤝", text: "Transparent communication" },
  { icon: "🛠️", text: "Full post-delivery support" },
  { icon: "🏆", text: "50+ projects delivered" },
];

export const SERVICES = [
  {
    icon: "🖥️",
    title: "Custom Software Development",
    desc: "Tailor-made software solutions built around your exact business workflows — not off-the-shelf compromises that create more problems than they solve.",
    tags: ["Java", "Spring Boot", "REST API"],
  },
  {
    icon: "🌐",
    title: "Web Application Development",
    desc: "Fast, responsive, and scalable web platforms built with modern frontend frameworks and rock-solid backends. Designed to perform under real traffic.",
    tags: ["React", "Node.js", "MySQL"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications that deliver a seamless, native-quality experience on both iOS and Android — from a single codebase.",
    tags: ["React Native", "Flutter", "APIs"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, cloud deployments, and infrastructure that keeps your systems running at scale. We set up systems that your team can own long-term.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: "🗄️",
    title: "Database Design & Optimization",
    desc: "Structured, efficient database architecture with performance tuning — built to handle your data growth without slowing down your application.",
    tags: ["MySQL", "PostgreSQL", "Hibernate"],
  },
  {
    icon: "🔗",
    title: "API Integration & Development",
    desc: "Connect your tools, platforms, and third-party services with clean, well-documented REST APIs that are reliable, versioned, and easy to maintain.",
    tags: ["REST", "OAuth", "Webhooks"],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Discovery & Scoping",
    desc: "We start with a detailed brief to understand your goals, constraints, and success criteria — then scope the project honestly with no hidden extras.",
  },
  {
    n: "02",
    title: "Design & Architecture",
    desc: "Wireframes, tech stack selection, and system design — before a single line of production code is written. We plan so we don't have to redo.",
  },
  {
    n: "03",
    title: "Agile Development",
    desc: "Two-week sprints with weekly demos and live access to your project board. You see progress continuously, not just at the end.",
  },
  {
    n: "04",
    title: "Testing & Deployment",
    desc: "Rigorous QA, staged rollouts, and full deployment support. We hand over a stable, documented, production-ready codebase.",
  },
];

export const TIMELINE = [
  { title: "Discovery & Scoping", meta: "Requirements signed off · 14 Jan", state: "done" },
  { title: "Architecture & Design", meta: "Tech stack approved · 22 Jan", state: "done" },
  { title: "Sprint 3 — Backend APIs", meta: "Order & payment modules · Due 10 Feb", state: "active" },
  { title: "QA & Staging", meta: "Automated test suite · 20 Feb", state: "next" },
  { title: "Production Deployment", meta: "AWS launch · 1 March", state: "next" },
];

export const PILLARS = [
  { icon: "🎯", title: "Outcome-Driven", desc: "We measure success by what your business can do with the software we build — not by hours logged or lines of code written." },
  { icon: "⚡", title: "Built to Ship", desc: "Agile sprints, CI/CD pipelines, and weekly demos by default. Our processes are optimised for speed without cutting corners." },
  { icon: "🔍", title: "Radical Transparency", desc: "No black-box development. You have live access to the project board, code repository, and a direct line to your developer at all times." },
];

export const STATS = [
  { target: 50, suffix: "+", label: "Projects Shipped" },
  { target: 98, suffix: "%", label: "On-Time Delivery" },
  { target: 30, suffix: "+", label: "Happy Clients" },
  { target: 4.9, suffix: "★", label: "Avg. Rating", decimals: 1 },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    text: "They delivered a complex Spring Boot backend in three weeks that two other vendors said would take three months. Genuinely impressed by the speed and the quality of the handover documentation.",
    initials: "AK",
    name: "Arjun K.",
    role: "CTO · RetailFlow India",
  },
  {
    stars: 5,
    text: "The team at VereNova Technologies feel like a genuine extension of our business. Transparent, responsive, and they always flag potential problems before they become actual problems.",
    initials: "SM",
    name: "Sneha M.",
    role: "Founder · HealthBridge App",
  },
  {
    stars: 5,
    text: "Our e-commerce platform went from concept to live in 8 weeks. Clean code, great documentation, and they stuck to the budget every sprint. Already planning phase two with them.",
    initials: "RV",
    name: "Ravi V.",
    role: "Co-Founder · ShopEase",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "How We Work", href: "how" },
  { label: "About", href: "about" },
  { label: "Clients", href: "testimonials" },
  { label: "Contact", href: "contact" },
];

export const SECTION_IDS = ["home", "services", "how", "about", "testimonials", "contact"];
