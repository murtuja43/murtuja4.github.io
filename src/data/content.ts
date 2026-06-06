import type {
  ContentPlatform,
  Experience,
  NavItem,
  Project,
  ResearchInterest,
  SkillCluster,
  SocialLink,
  Stat,
  TeachingPillar,
} from "@/types";

/* -------------------------------------------------------------------------- */
/*  SITE / PERSON                                                              */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "Murtuja Kayes",
  url: "https://www.murtuja.me",
  role: "AI Engineer & ML Researcher",
  company: "Alfa Center",
  tagline:
    "AI Engineer & ML Researcher with an Applied Mathematics background.",
  description:
    "Murtuja Kayes — AI Engineer and Machine Learning Researcher at Alfa Center. Applied Mathematics student building intelligent systems and conducting research grounded in optimization, statistics, and signal processing.",
  email: "murtujakayes@gmail.com",
  location: "Kazakhstan",
} as const;

/* -------------------------------------------------------------------------- */
/*  NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Content", href: "#content" },
  { label: "Teaching", href: "#teaching" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

export const heroRoles = [
  "AI Engineer",
  "ML Researcher",
  "Applied Mathematics Student",
  "Tech Educator",
];

export const heroIntro =
  "Building intelligent systems, conducting machine learning research, and sharing knowledge through technology and education — grounded in applied mathematics.";

export const heroTechChips = [
  "Python",
  "PyTorch",
  "Deep Learning",
  "NumPy",
  "Signal Processing",
];

/* -------------------------------------------------------------------------- */
/*  STATS  (hero strip + dedicated band)                                       */
/* -------------------------------------------------------------------------- */

export const heroStats: Stat[] = [
  { value: 3, suffix: "+", label: "AI Projects" },
  { value: 500, suffix: "K+", label: "Video Reach" },
  { value: 7000, suffix: "+", label: "Social Audience", compact: true },
  { value: 0, suffix: "", label: "Research Initiatives", display: "Multiple" },
];

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "AI Projects" },
  { value: 500, suffix: "K+", label: "Video Views" },
  { value: 7000, suffix: "+", label: "Social Audience", compact: true },
  { value: 0, suffix: "", label: "Research Initiatives", display: "Multiple" },
];

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

export const about = {
  thesis: "The mathematician's approach to AI.",
  paragraphs: [
    "I come to artificial intelligence from applied mathematics rather than a traditional computer-science path. For me, a model is not a black box to be tuned by trial and error — it is an optimization problem, a probability distribution, a signal to be decomposed and understood. That analytical foundation shapes how I frame problems, choose methods, and reason about why a system works.",
    "As an AI Engineer & ML Researcher at Alfa Center, I build and experiment with machine-learning systems end to end: framing the problem, preparing data, developing and training models, and interpreting results. My focus sits at the intersection of deep learning, signal processing, and healthcare AI — domains where mathematical rigor and real-world impact meet.",
    "Beyond engineering and research, I create educational technology content and teach IELTS — practice that sharpens how I communicate complex ideas clearly. I learn aggressively and continuously, and I am driven by curiosity about how intelligence, both natural and artificial, can be modeled and understood.",
  ],
  identityChips: [
    "AI Engineer",
    "ML Researcher",
    "Applied Mathematics",
    "Healthcare AI",
    "Educator",
  ],
  facts: [
    { label: "Currently", value: "AI Engineer & ML Researcher @ Alfa Center" },
    { label: "Studying", value: "Applied Mathematics, Kazakhstan" },
    { label: "Focus", value: "Deep Learning · Signal Processing · Healthcare AI" },
    { label: "Mindset", value: "Research-driven · Continuous learning" },
  ],
};

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE                                                                 */
/* -------------------------------------------------------------------------- */

export const experiences: Experience[] = [
  {
    role: "AI Engineer & ML Researcher",
    company: "Alfa Center",
    period: "2024 — Present",
    summary:
      "Design, build, and research machine-learning systems end to end — from problem framing and data analysis to model development and experimentation.",
    points: [
      "Conduct research-oriented machine-learning work, translating analytical and mathematical methods into working systems.",
      "Develop and train deep-learning models, including signal-based architectures for healthcare applications.",
      "Run data analysis and experimentation workflows: preprocessing, feature engineering, evaluation, and iteration.",
      "Solve technical problems across the ML lifecycle, balancing mathematical rigor with engineering pragmatism.",
    ],
    tags: ["PyTorch", "Python", "Deep Learning", "Research", "Signal Processing"],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    title: "ECG-Based Myocardial Infarction Detection",
    tagline: "Deep learning for automated cardiac diagnosis from ECG signals.",
    description:
      "A deep-learning system for automated detection of myocardial infarction (heart attack) directly from ECG signal analysis. The pipeline processes raw electrocardiogram signals, applies signal-processing techniques, and trains neural networks to classify pathological patterns — bringing mathematical signal analysis and modern deep learning together for healthcare.",
    highlights: [
      "Signal preprocessing and feature extraction from raw ECG waveforms",
      "Deep neural network architecture for time-series classification",
      "Healthcare-focused evaluation with clinical relevance in mind",
    ],
    tech: ["Python", "PyTorch", "Deep Learning", "Signal Processing"],
    // TODO: the provided repo `ecg-cardiac-disease-analysis` 404s — points to
    // profile for now. Replace once the repo is public or the URL is corrected.
    github: "https://github.com/murtuja43",
    demo: "",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Lung CT Scan Analyzer (3D)",
    tagline: "AI-powered lung CT analysis with interactive 3D visualization.",
    description:
      "An AI system that analyzes lung CT scans and renders the results in interactive 3D. Built in Python with a web interface, it combines deep-learning-based medical image analysis with intuitive volumetric visualization to support exploration of pulmonary structures — a healthcare-AI project where signal/image analysis meets usable tooling.",
    highlights: [
      "Deep-learning analysis of lung CT scan volumes",
      "Interactive 3D visualization of results",
      "Python pipeline with a web-based interface",
    ],
    tech: ["Python", "Deep Learning", "Medical Imaging", "3D Visualization"],
    github: "https://github.com/murtuja43/lung3d-ai",
    demo: "",
    featured: true,
    accent: "cyan",
  },
  {
    title: "ZhanAI",
    tagline: "A full-stack AI application, from ML core to web interface.",
    description:
      "ZhanAI is an end-to-end AI application that pairs a Python machine-learning core with a TypeScript web interface, packaged with Docker for reproducible deployment. It reflects the full path from model to product — building, serving, and delivering machine learning behind a clean user experience.",
    highlights: [
      "Python machine-learning backend",
      "TypeScript web interface",
      "Containerized with Docker for reproducible deployment",
    ],
    tech: ["Python", "TypeScript", "Docker", "Machine Learning"],
    github: "https://github.com/murtuja43/ZhanAI",
    demo: "",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Breast Cancer Detection",
    tagline: "Machine-learning classification for breast cancer detection.",
    description:
      "A machine-learning project for breast cancer detection, developed in Python notebooks. It covers the full data-science workflow — data exploration, feature analysis, model training, and evaluation — applying statistical and ML methods to a healthcare classification problem.",
    highlights: [
      "End-to-end ML workflow in Python notebooks",
      "Data exploration, modeling, and evaluation",
      "Healthcare-focused classification",
    ],
    tech: ["Python", "Jupyter", "Scikit-Learn", "Machine Learning"],
    github: "https://github.com/murtuja43/Breast_Cancer_Detection_Project",
    demo: "",
    featured: true,
    accent: "cyan",
  },
];

/* -------------------------------------------------------------------------- */
/*  RESEARCH                                                                   */
/* -------------------------------------------------------------------------- */

export const researchInterests: ResearchInterest[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Foundations of intelligent systems and how learning and reasoning can be modeled.",
    icon: "brain",
  },
  {
    title: "Machine Learning",
    description:
      "Learning algorithms, generalization, and the statistics that govern them.",
    icon: "network",
  },
  {
    title: "Deep Learning",
    description:
      "Neural architectures and training dynamics for complex, high-dimensional data.",
    icon: "layers",
  },
  {
    title: "Healthcare AI",
    description:
      "Applying ML to medical signals and data to support diagnosis and care.",
    icon: "activity",
  },
  {
    title: "Signal Processing",
    description:
      "Decomposing and analyzing signals — the mathematical bridge to real-world data.",
    icon: "waves",
  },
  {
    title: "Explainable AI",
    description:
      "Making model decisions interpretable, transparent, and trustworthy.",
    icon: "scan-search",
  },
];

export const researchRoadmap = [
  {
    stage: "Now",
    title: "Healthcare signal models",
    description:
      "Deep learning on physiological signals (ECG) for diagnosis, grounded in signal processing.",
  },
  {
    stage: "Near-term",
    title: "Explainability & optimization",
    description:
      "Interpretable models and the optimization theory behind reliable, efficient training.",
  },
  {
    stage: "Future",
    title: "Research at scale",
    description:
      "Graduate research bridging applied mathematics and machine learning for real impact.",
  },
];

export const researchPhilosophy =
  "I believe the most durable AI is built on mathematical understanding, not just engineering intuition. Optimization, probability, and signal analysis are not background details — they are the tools that let us reason about why a model works, when it will fail, and how to make it trustworthy.";

/* -------------------------------------------------------------------------- */
/*  SKILLS                                                                     */
/* -------------------------------------------------------------------------- */

export const skillClusters: SkillCluster[] = [
  {
    title: "Mathematical Foundations",
    icon: "sigma",
    featured: true,
    skills: [
      "Optimization",
      "Statistics",
      "Linear Algebra",
      "Signal Processing",
      "Mathematical Modeling",
    ],
  },
  {
    title: "Machine Learning",
    icon: "brain-circuit",
    skills: ["Deep Learning", "Data Science", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "AI / ML Stack",
    icon: "cpu",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn"],
  },
  {
    title: "Development",
    icon: "code-2",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Linux", "Docker"],
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTENT CREATION                                                           */
/* -------------------------------------------------------------------------- */

export const contentTopics = [
  "AI",
  "GitHub",
  "Programming",
  "Developer Tools",
  "Technology",
];

export const contentPlatforms: ContentPlatform[] = [
  {
    name: "YouTube",
    handle: "@BeginnerBitsHQ",
    metric: "500K+",
    metricLabel: "Total Views",
    icon: "youtube",
    href: "https://www.youtube.com/@BeginnerBitsHQ",
  },
  {
    name: "Instagram",
    handle: "@murtujakayes",
    metric: "7000+",
    metricLabel: "Followers",
    icon: "instagram",
    href: "https://www.instagram.com/murtujakayes/",
  },
];

export const contentSummary =
  "I create educational technology content on AI, programming, and developer tools — alongside motivational content for students. Communicating complex ideas to a broad audience keeps my own thinking sharp and clear.";

/* -------------------------------------------------------------------------- */
/*  TEACHING                                                                   */
/* -------------------------------------------------------------------------- */

export const teaching = {
  role: "IELTS Instructor & Mentor",
  summary:
    "I teach IELTS and help students improve their English communication and confidence. Teaching sharpens the skills that make a good researcher and engineer: explaining clearly, mentoring others, and speaking with precision.",
  pillars: [
    {
      title: "Mentorship",
      description: "Guiding students toward their goals with structured support.",
      icon: "users",
    },
    {
      title: "Communication",
      description: "Explaining complex ideas simply, in writing and in speech.",
      icon: "message-circle",
    },
    {
      title: "Public Speaking",
      description: "Confident, clear delivery to audiences of every size.",
      icon: "presentation",
    },
    {
      title: "Knowledge Sharing",
      description: "Turning what I learn into resources others can use.",
      icon: "graduation-cap",
    },
  ] as TeachingPillar[],
};

/* -------------------------------------------------------------------------- */
/*  GITHUB                                                                     */
/* -------------------------------------------------------------------------- */

export const github = {
  username: "murtuja43",
  profileUrl: "https://github.com/murtuja43",
  // Curated fallback shown if the live API is unavailable / rate-limited.
  fallbackProfile: {
    name: "Murtuja Kayes",
    bio: "AI Engineer & ML Researcher · Applied Mathematics",
    followers: 0,
    following: 0,
    public_repos: 0,
    avatar_url: "",
  },
  fallbackRepos: [
    {
      name: "ecg-mi-detection",
      description:
        "Deep learning for myocardial infarction detection from ECG signals.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/murtuja43",
    },
    {
      name: "ml-research",
      description: "Machine learning research experiments and notebooks.",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/murtuja43",
    },
    {
      name: "portfolio",
      description: "Personal portfolio built with Next.js and Tailwind.",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/murtuja43",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  SOCIAL / CONTACT                                                           */
/* -------------------------------------------------------------------------- */

export const socials: SocialLink[] = [
  { name: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { name: "GitHub", href: "https://github.com/murtuja43", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/murtuja-kayes/",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BeginnerBitsHQ",
    icon: "youtube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/murtujakayes/",
    icon: "instagram",
  },
];

export const contact = {
  heading: "Let's build something",
  subheading:
    "Open to AI internships, ML engineering roles, research assistantships, and graduate scholarships. Reach out — I respond to every message.",
  cta: "Open to AI internships, research collaborations & scholarships.",
  // Web3Forms access key — replace with your key from https://web3forms.com
  web3formsKey: "ab369a0f-8cb0-4f50-8fec-fd6758e1e60b",
};

export const resumeUrl = "/resume.pdf";
