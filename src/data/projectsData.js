import projImg1 from "../assets/img/projects/project-img1.png";
import projImg2 from "../assets/img/projects/project-img2.png";
import projImg3 from "../assets/img/projects/project-img3.png";

// Import modular case study content JSX objects
import { RagChatbotCaseStudy } from "./case-studies/RagChatbot";
import { RecipeRaveCaseStudy } from "./case-studies/RecipeRave";
import { MobileInfogaCaseStudy } from "./case-studies/MobileInfoga";
import { SelioMarketingCaseStudy } from "./case-studies/SelioMarketing";
import { VehicleRentalCaseStudy } from "./case-studies/VehicleRental";
import { EvLocatorCaseStudy } from "./case-studies/EvLocator";
import { FakeNewsCaseStudy } from "./case-studies/FakeNews";
import { CervicalAICaseStudy } from "./case-studies/CervicalAI";
import { EShopCaseStudy } from "./case-studies/EShop";

export const projectsData = [
  {
    id: 8,
    title: "cervical_ai",
    description: "A privacy-preserving multimodal AI system utilizing PyTorch models and the Flower federated learning framework for early cervical cancer detection.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Django", "PyTorch", "Federated Learning", "Explainable AI"],
    githubUrl: "https://github.com/Bineesh627/cervical_ai",
    caseStudyContent: CervicalAICaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'CERVICAL_BIOMEDICAL_AI' },
      { label: 'CLASSIFICATION', value: 'PRIVACY_PRESERVING_AI' },
      { label: 'ML_ENGINE', value: 'PyTorch & Flower (FL)' },
      { label: 'EXPLAINER', value: 'SHAP & Grad-CAM' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 1,
    title: "Rag Chatbot",
    description: "Developed a college chatbot leveraging Retrieval-Augmented Generation (RAG) in collaboration with the principal. The system employs intelligent agents to extract information from the college website and PDF documents, all managed through a dedicated admin panel for seamless operation.",
    image: projImg1,
    tags: ["Python", "Bootstrap", "Django", "Langchain", "HTML", "CSS", "Javascript", "Numpy"],
    githubUrl: "https://github.com/Bineesh627/college_chatbot",
    caseStudyContent: RagChatbotCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'RAG_CHATBOT' },
      { label: 'CLASSIFICATION', value: 'OPEN_SOURCE' },
      { label: 'DATABASE_ENGINE', value: 'ChromaDB' },
      { label: 'NLP_FRAMEWORK', value: 'Langchain' }
    ],
    gallery: [
      projImg1,
      "https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 7,
    title: "TruthGuard",
    description: "A Django-based web application that uses a TensorFlow/Keras LSTM neural network to detect fake news from text or URLs in real-time.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    tags: ["Django", "TensorFlow", "Python", "Bootstrap", "Tailwind CSS"],
    githubUrl: "https://github.com/Bineesh627/fakenewsdetector",
    caseStudyContent: FakeNewsCaseStudy,
    specs: [
      { label: 'FRAMEWORK', value: 'Django 4.2' },
      { label: 'ALGORITHM', value: 'LSTM Neural Network' },
      { label: 'DATABASE', value: 'SQLite 3' },
      { label: 'FRONTEND', value: 'Bootstrap 5 & Tailwind' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 2,
    title: "Culinary Community & Sharing Platform",
    description: "Join a vibrant community of food lovers on RecipeRave! Follow your favorite home cooks and culinary creators, explore a diverse collection of recipes, and share your own delicious creations with the world, just like your favorite photo-sharing platform.",
    image: projImg2,
    tags: ["Python", "Django", "HTML", "CSS", "Javascript", "Bootstrap"],
    githubUrl: "https://github.com/Bineesh627/reciperave",
    caseStudyContent: RecipeRaveCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'RECIPERAVE_PORTAL' },
      { label: 'CLASSIFICATION', value: 'SOCIAL_NETWORK' },
      { label: 'FRAMEWORK', value: 'Django / Python' },
      { label: 'CLIENT_UI', value: 'Bootstrap 5' }
    ],
    gallery: [
      projImg2,
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 3,
    title: "MobileInfoga",
    description: "MobileInfoGa is a powerful OSINT tool designed to gather comprehensive details about phone numbers. Utilizing various techniques and integrations, it can retrieve information such as country of origin, carrier details, and potential online associations.",
    image: projImg3,
    tags: ["Python", "Telethon", "Phonenumbers"],
    githubUrl: "https://github.com/Bineesh627/MobileInfoga",
    caseStudyContent: MobileInfogaCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'MOBILEINFOGA_OSINT' },
      { label: 'CLASSIFICATION', value: 'SECURITY_TOOL' },
      { label: 'CORE_LIBRARY', value: 'Telethon API' },
      { label: 'INTERFACE', value: 'Rich CLI Command' }
    ],
    gallery: [
      projImg3,
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 4,
    title: "selio_marketing_co",
    description: "A freelance web application project built for the Selio Marketing digital agency to display their digital services and handle lead capture.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Bineesh627/selio_marketing_co",
    caseStudyContent: SelioMarketingCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'SELIO_MARKETING' },
      { label: 'CLASSIFICATION', value: 'FREELANCE_AGENCY_PORTAL' },
      { label: 'LIVE_DOMAIN', value: 'selio-marketing.vercel.app' },
      { label: 'LANG_STAMP', value: 'TypeScript Engine' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 5,
    title: "vehicle-rental-service",
    description: "An enterprise fleet management mobile application and Django API supporting multi-tier roles, concurrency booking locks, dynamic pricing, and KYC validation.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Expo", "Django", "Python", "TypeScript", "NativeWind"],
    githubUrl: "https://github.com/Bineesh627/vehicle-rental-service",
    caseStudyContent: VehicleRentalCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'VEHICLE_RENTAL' },
      { label: 'CLASSIFICATION', value: 'FLEET_MANAGER' },
      { label: 'MOBILE_CLIENT', value: 'Expo Router (React Native)' },
      { label: 'BACKEND_API', value: 'Django 6.0 REST Framework' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 6,
    title: "ev-stations-locator",
    description: "A web utility mapping and locating nearby electric vehicle charging stations, integrating Google Maps API and routing systems.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Bineesh627/ev-stations-locator",
    caseStudyContent: EvLocatorCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'EV_STATIONS_LOCATOR' },
      { label: 'CLASSIFICATION', value: 'MAPPING_UTILITY' },
      { label: 'API_INTEGRATION', value: 'Google Maps directions' },
      { label: 'GEOLOCATION', value: 'Live HTML5 Client' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=600"
    ]
  },
  {
    id: 9,
    title: "e_shop",
    description: "An interactive, fully functional e-commerce storefront with cart logic, search autocompletion, checkout modals, and responsive layout rows.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "HTML", "CSS", "Node.js"],
    githubUrl: "https://github.com/Bineesh627/e_shop",
    caseStudyContent: EShopCaseStudy,
    specs: [
      { label: 'RELEASE_MODULE', value: 'ESHOP_STOREFRONT' },
      { label: 'CLASSIFICATION', value: 'E_COMMERCE' },
      { label: 'CART_MANAGER', value: 'Client State Manager' },
      { label: 'SEARCH_FLOW', value: 'Autocomplete tags' }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600"
    ]
  }
];
