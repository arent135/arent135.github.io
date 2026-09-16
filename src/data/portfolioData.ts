import { Project, TimelineEntry, SkillCategory } from '../types';

export const HERO_DATA = {
  name: "Alex.",
  role: "Software Engineer",
  status: "OPEN TO NEW OPPORTUNITIES",
  headline: "Learning, creating, and figuring things out along the way.",
  bio: "I'm a Computer Science student at CWRU who likes making things, solving problems, and getting way too invested in whatever I'm working on. Outside of code, I'm usually climbing, playing games, or finding something new to learn.",
};

export const ABOUT_DATA = {
  sectionNumber: "01 // OVERVIEW",
  heading: "A little bit about me.",
  bio: "I am currently pursuing a BS in Computer Science with a focus on security and software development. My journey in security started in middle school, where I participated in CyberPatriots and continued through the end of high school. In my freshman year, I gained experience by joining the university Capture The Flag (CTF) team, where I began learning how systems can be exploited and defended. I also participated in various Hackathons, where I worked with a team to quickly build and deploy solutions to real world problems. These days, I enjoy building things, solving problems, and exploring whatever catches my interest.",
  image: "/../public/images/headshot.jpg",
  focusAreas: [
    "Cybersecurity",
    "Networking",
    "Software Development"
  ],
  philosophy: [
    "Minimalism",
    "Performance",
    "Secure-by-Design"
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    colorClass: "text-[#baccb0]",
    items: [
      { name: "Python", level: "Expert", description: "Used for ML modeling with PyTorch & backend services with FastAPI." },
      { name: "Rust", level: "Advanced", description: "Memory-safe systems programming, CLI tooling, and webassembly." },
      { name: "TypeScript", level: "Advanced", description: "Full-stack development with Next.js, React, and server runtime." },
      { name: "Go", level: "Intermediate", description: "Cloud microservices, network proxies, and container orchestration tools." }
    ]
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: "layers",
    colorClass: "text-[#e3b5ff]",
    items: [
      { name: "PyTorch", level: "Advanced", description: "Custom neural network architecture training and YOLO object detection." },
      { name: "Next.js", level: "Advanced", description: "Server-side rendered React applications with strict performance budgets." },
      { name: "FastAPI", level: "Advanced", description: "High-performance asynchronous REST and WebSocket API backends." }
    ]
  },
  {
    id: "security",
    title: "Security",
    icon: "shield",
    colorClass: "text-[#baccb0]",
    items: [
      { name: "Pentesting", level: "Advanced", description: "Binary exploitation, web app vulnerability scanning, and privilege escalation." },
      { name: "Cryptography", level: "Intermediate", description: "Zero-knowledge proofs (ZKPs), public key infrastructure, and SSL/TLS security." },
      { name: "Analysis", level: "Advanced", description: "Memory forensics, GDB debugging, static binary analysis, and disassembling with Ghidra." }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "cloud",
    colorClass: "text-[#e3b5ff]",
    items: [
      { name: "Docker", level: "Advanced", description: "Multi-stage container builds, rootless containers, and image optimization." },
      { name: "K8s", level: "Intermediate", description: "Kubernetes manifests, ingress controllers, and secret management." },
      { name: "AWS", level: "Intermediate", description: "IAM policies, EC2, Lambda edge functions, and CloudWatch security logs." }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-recycling-assistant",
    title: "IsItRecyclable.ai",
    year: "2026",
    description: "Computer vision application using tensorflow to identify recyclable materials in real-time.",
    longDescription: "An AI vision system engineered to process user photos and categorize recyclable materials to give actionable insights on recycling laws. We are working with Case Western Reserve University to deploy this system onto their website, so users can easily check if their materials are recyclable in their area.",
    image: "/../public/images/isitrecyclable.png",
    tags: ["PYTHON", "TENSORFLOW", "NEXT.JS"],
    category: "AI/ML",
    highlights: [
      "Achieved top 9 in our schoolwide hackathon",
      "Worked with the university to deploy the system on their website",
      "Sorting capability for all seven types of plastic bottle identification codes (PET, HDPE, PVC, LDPE, PP, PS, Other)."
    ],
    demoUrl: "https://isitrecyclable.site/",
    githubUrl: "https://github.com/dylanshulman12/HackCWRU"
  },
  // {
  //   id: "ctf-writeups-archive",
  //   title: "CTF Writeups Archive",
  //   year: "2024",
  //   description: "Comprehensive documentation of solved security challenges from DEFCON and HTB. Focus on binary exploitation and memory forensics.",
  //   longDescription: "An interactive security repository and technical journal housing over 80+ detailed CTF writeups covering heap exploitation, format string bugs, reverse engineering x86_64 ELF binaries, and Volatility memory dumps.",
  //   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRE-or_VVHoaBbzgSRFVNS92H1wosq8rEUF5uaucpynT8AmfxLZLd5-3sn8S2BJ-_SYPuvxH48HWgmi4_GOtdiYy23QtUv4AR9sm_H2xQLWItjFD7Ljvcb1nzwkr7PsWHHk4lYwTJV3iPCx2IWETyfPaIsbrILV3fJDQcxyYww5NHQ68H3ATt0U9bc4MGfWqHGkGrSbVEsQKkCLD5aulDCtiKlp7-bR6Adz4Jkj7TqZSeZsARrwQdS",
  //   tags: ["SECURITY", "GHOST", "REVERSE ENGINEERING"],
  //   category: "Security",
  //   highlights: [
  //     "Custom GDB python scripts for automating exploit payload generation",
  //     "Deep dive writeups on kernel-level privilege escalation CVEs",
  //     "Automated markdown generation from challenge solution scripts"
  //   ],
  //   demoUrl: "#",
  //   githubUrl: "https://github.com"
  // },
  {
    id: "secure-password-manager",
    title: "Secure Password Manager",
    year: "2023",
    description: "Decentralized identity tool using zero-knowledge proofs to verify user credentials without revealing sensitive data.",
    longDescription: "Awarded 'Best Security Implementation' at HackTheVoid Hackathon. PulseGuard allows users to prove age or membership attributes using Circom zkWASM circuits while maintaining 100% cryptographic privacy.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmVb9DdWb55cm_gNn2L3vSh3tZw6vWzQ-iOSyZWM9wiQVjyR9tVCzidAfU6jsT0PG1pnI8SyB64UYk1SXiEeWy1JKno5Wuf-Nb2O0tVtwnb9GwF1dX5bS_ZOXF6rGN8ryvu_A5gkJZWqtJ3_zTgMot2h-w13uuSIQE8mlg54hncRtY73TtHMtphkO4oYRkiPvIzit_rAp2Sve9KI2Xm7eQ_VlaZlOl7ap8-ic-Pon375astpJLEvj5",
    tags: ["CRYPTOGRAPHY", "OWASP", "SECURE STORAGE"],
    category: "Security",
    highlights: [
      "Zero-knowledge circuit client generation in sub-300ms",
      "Built with Rust & WASM bindings for browser integration",
      "Awarded 1st place in Hackathon Security Category"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "cine-swipe",
    title: "CineSwipe",
    year: "2026",
    description: "A movie recommendation web app that uses a tinder like swipe feature to help users in groups decide on a movie to watch.",
    longDescription: "CineSwipe is a web application that allows users to join a group on a local network and swipe through movie recommendations, liking the ones they want to watch. Once a match has been found, a movie everone has liked, it will display on the screen and give information on where to watch and other details.",
    image: "/../public/images/cine-swipe.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    category: "WEB DEV",
    highlights: [
      "Worked with The Movie Database API to get movie recommendations and details",
      "Implemented a local network group system using WebSockets for real-time updates",
      "Designed a responsive and user-friendly interface for swiping and matching movies"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/wyguy27/Cine-Swipe"
  }
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: "edu",
    period: "2025 — 2029",
    role: "BS in Computer Science",
    organization: "Case Western Reserve University",
    organizationColor: "primary",
    description: "GPA: 4.0/4.0. Member of the Cybersecurity Club. Focused on secuirty and development.",
    details: [
      "Coursework: Computer Security, Computer Networks, Data Structures, Discrete Mathematics, Logic and Design",
      "Member of Cybersecurity Club: Attend weekly CTF practice sessions and participate in 24h collegiate hackathons"
    ]
  },
  {
    id: "lead-dev",
    period: "OCT 2023",
    role: "Lead Developer",
    organization: "HACKTHEVOID HACKATHON",
    organizationColor: "secondary",
    description: "Led a team to build 'PulseGuard', a decentralized identity tool. Awarded 'Best Security Implementation' for zero-knowledge proof usage.",
    details: [
      "Architected zero-knowledge verification pipelines using Circom & Rust",
      "Coordinated 4 team members across frontend, backend, and smart contract modules"
    ]
  },
  {
    id: "intern",
    period: "Fall 2024 - Spring 2025",
    role: "Database Intern",
    organization: "Alamo Reginal ",
    organizationColor: "primary",
    description: "Automated vulnerability scanning using custom Python modules. Assisted in three full-scale internal penetration tests for staging environments.",
    details: [
      "Developed custom AST analysis scripts to catch hardcoded secrets in CI/CD pipelines",
      "Configured automated container scanning using Trivy & Docker security policies"
    ]
  }
];

export const DEFAULT_COMMANDS = [
  "npm install --save secure-systems",
  "node build.js --optimize",
  "ls -la /dev/projects",
  "cat profile.json",
  "grep -r 'innovation' ./brain"
];

export const CONTACT_INFO = {
  email: "alex@dev.internal",
  github: "github.com/alex-dev-sec",
  linkedin: "linkedin.com/in/alex-dev-systems",
  twitter: "x.com/alex_sec_dev",
  sshKey: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICl9bX... alex@dev-workstation",
  pgpFingerprint: "4A8F 9021 B5E3 8122 D009 1A44 778C 2011 9B4F"
};
