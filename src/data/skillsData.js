// Import logos
import jsLogo from "../assets/img/skills/js.png";
import htmlLogo from "../assets/img/skills/html.png";
import cssLogo from "../assets/img/skills/css-3.png";
import BootstrapLogo from "../assets/img/skills/bootstrap.png";
import ReactLogo from "../assets/img/skills/react.png";
import UiUxLogo from "../assets/img/skills/ui-ux.png";
import DjangoLogo from "../assets/img/skills/django.png";
import PythonLogo from "../assets/img/skills/python.png";
import MongoDbLogo from "../assets/img/skills/mongodb.png";
import MysqlLogo from "../assets/img/skills/mysql.png";
import GitLogo from "../assets/img/skills/git.png";
import DockerLogo from "../assets/img/skills/docker.png";
import FigmaLogo from "../assets/img/skills/figma.png";
import VsCodeLogo from "../assets/img/skills/vs-code.png";
import LinuxLogo from "../assets/img/skills/linux.png";
import PostmanLogo from "../assets/img/skills/postman.png";
import BurpsuiteLogo from "../assets/img/skills/burpsuite.png";
import NmapLogo from "../assets/img/skills/nmap.png";

export const skillsData = [
  { name: "HTML", levelLabel: "Expert", category: "frontend", icon: htmlLogo },
  { name: "CSS", levelLabel: "Expert", category: "frontend", icon: cssLogo },
  { name: "JavaScript", levelLabel: "Advanced", category: "frontend", icon: jsLogo },
  { name: "Bootstrap", levelLabel: "Advanced", category: "frontend", icon: BootstrapLogo },
  { name: "React", levelLabel: "Intermediate", category: "frontend", icon: ReactLogo },
  { name: "UI/UX", levelLabel: "Intermediate", category: "frontend", icon: UiUxLogo },

  { name: "Django", levelLabel: "Advanced", category: "backend", icon: DjangoLogo },
  { name: "Python", levelLabel: "Expert", category: "backend", icon: PythonLogo },
  { name: "MongoDB", levelLabel: "Advanced", category: "backend", icon: MongoDbLogo },
  { name: "MySQL", levelLabel: "Expert", category: "backend", icon: MysqlLogo },

  { name: "Git", levelLabel: "Advanced", category: "tools", icon: GitLogo },
  { name: "Docker", levelLabel: "Basic", category: "tools", icon: DockerLogo },
  { name: "Figma", levelLabel: "Intermediate", category: "tools", icon: FigmaLogo },
  { name: "VS Code", levelLabel: "Expert", category: "tools", icon: VsCodeLogo },
  { name: "Linux", levelLabel: "Expert", category: "tools", icon: LinuxLogo },
  { name: "Postman", levelLabel: "Advanced", category: "tools", icon: PostmanLogo },
  { name: "Burp Suite", levelLabel: "Intermediate", category: "tools", icon: BurpsuiteLogo },
  { name: "Nmap", levelLabel: "Intermediate", category: "tools", icon: NmapLogo },

  { name: "Penetration Testing", levelLabel: "Expert", category: "cybersecurity" },
  { name: "Vulnerability Assessment", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Network Security", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Ethical Hacking", levelLabel: "Expert", category: "cybersecurity" },
  { name: "Security Auditing", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Incident Response", levelLabel: "Intermediate", category: "cybersecurity" },
  { name: "Risk Assessment", levelLabel: "Advanced", category: "cybersecurity" },

  { name: "Machine Learning", levelLabel: "Expert", category: "ai" },
  { name: "Deep Learning", levelLabel: "Advanced", category: "ai" },
  { name: "Natural Language Processing", levelLabel: "Advanced", category: "ai" },
  { name: "Computer Vision", levelLabel: "Intermediate", category: "ai" },
  { name: "TensorFlow", levelLabel: "Advanced", category: "ai" },
  { name: "PyTorch", levelLabel: "Intermediate", category: "ai" },
  { name: "Data Analysis", levelLabel: "Expert", category: "ai" },
  { name: "AI Model Development", levelLabel: "Expert", category: "ai" },

  { name: "Business Strategy", levelLabel: "Expert", category: "entrepreneurship" },
  { name: "Product Development", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Market Research", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Financial Planning", levelLabel: "Intermediate", category: "entrepreneurship" },
  { name: "Team Leadership", levelLabel: "Expert", category: "entrepreneurship" },
  { name: "Project Management", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Innovation Management", levelLabel: "Expert", category: "entrepreneurship" },
];

export const skillCategories = ["frontend", "backend", "tools", "cybersecurity", "ai", "entrepreneurship"];
