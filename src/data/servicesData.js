import { Cpu, Server, Terminal, Globe } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "AI & Machine Learning Solutions",
    icon: Cpu,
    logLabel: "SYS_MODEL_TRAINING",
    description: "Architecting custom neural networks, computer vision pipelines (YOLO, OpenCV), and integrating intelligent LLM-driven agents for workflow automation.",
    features: ["Custom ML Models", "Computer Vision Pipelines", "AI Agent Integration", "Fine-Tuning & Deployment"],
    status: "OPTIMIZED"
  },
  {
    id: 2,
    title: "Python Backend & API Systems",
    icon: Server,
    logLabel: "API_ROUTING_ACTIVE",
    description: "Designing high-concurrency API structures and robust server architectures using FastAPI, Django, and Flask with SQL/NoSQL databases.",
    features: ["RESTful/GraphQL APIs", "Database Optimization", "Microservices Design", "Cloud Infrastructure Integration"],
    status: "STABLE"
  },
  {
    id: 3,
    title: "Web Scraping & Automation",
    icon: Terminal,
    logLabel: "DATA_HARVEST_RUNNING",
    description: "Developing resilient, high-speed web scrapers, crawler frameworks, and automated UI pipelines capable of bypassing complex anti-bot screens.",
    features: ["Advanced Data Extraction", "Automated Workflows", "API Integrations", "OSINT Data Collection"],
    status: "ACTIVE"
  },
  {
    id: 4,
    title: "Website Development",
    icon: Globe,
    logLabel: "HTTP_SERVER_UP",
    description: "Designing and developing responsive, high-performance, and visually stunning web applications and landing pages using modern frontend and backend tech stacks.",
    features: ["Single Page Applications", "Responsive Layouts", "State Management", "Performance Optimization"],
    status: "DEPLOYED"
  }
];
