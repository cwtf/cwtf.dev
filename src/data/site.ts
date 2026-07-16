export const SITE = {
  domain: 'cwtf.dev',
  url: 'https://cwtf.dev',
  name: 'Christopher Wong Teng Foong',
  title: 'Christopher Wong Teng Foong | Technical Trainer & Automation Consultant',
  description:
    'Christopher Wong Teng Foong (cwtf.dev): technical trainer and automation consultant in Malaysia. A decade of production engineering in banking and government, now building AI fluency in Malaysian SMEs through HRD Corp-registered workshops. Creator of SheetClaw, AI Board Games and Wiki Globe. Currently pursuing an MSc in Artificial Intelligence at Monash University Malaysia.',
  email: 'cwtf@pm.me',
  github: 'https://github.com/cwtf',
  location: 'Malaysia',
  keywords: [
    'Christopher Wong Teng Foong',
    'Christopher Wong',
    'Wong Teng Foong',
    'cwtf',
    'technical trainer Malaysia',
    'AI trainer Malaysia',
    'HRD Corp trainer',
    'Train the Trainer TTT certified',
    'automation consultant',
    'LLM integration',
    'AI workshops Malaysia',
    'corporate AI training',
    'DevOps',
    'SQL Server',
    'Cloudflare Workers',
  ],
};

export const HERO = {
  quip: "And yes, cwtf is just my initials. I know what you're thinking, but that's not what the wtf stands for. 😉",
  roles: [
    'Technical Trainer',
    'Automation Consultant',
    'AI Tooling Builder',
    'MSc AI Student @ Monash',
  ],
  summary:
    'I spent a decade shipping production systems for banks and government. Now I teach Malaysian SMEs how to actually use AI, backed by real, deployed tooling rather than slideware.',
  status:
    'Currently pursuing an MSc in Artificial Intelligence at Monash University Malaysia. Out of the job market for now, but always open to interesting conversations in AI, training and automation.',
};

export interface Project {
  name: string;
  tagline: string;
  url: string;
  urlLabel: string;
  icon: string; // simple-icons slug or '' for monogram
  monogram?: string;
  emoji?: string;
  img?: string;
  preserveLogoDetail?: boolean;
  brand?: string;
  points: string[];
  tech: TechChip[];
}

export interface TechChip {
  label: string;
  icon?: string; // simple-icons slug
}

export const PROJECTS: Project[] = [
  {
    name: 'SheetClaw',
    tagline: 'Multi-provider LLM agent living inside Microsoft Excel',
    url: 'https://github.com/cwtf/SheetClaw',
    urlLabel: 'github.com/cwtf/SheetClaw',
    icon: '',
    monogram: 'SC',
    emoji: '🦞',
    preserveLogoDetail: true,
    brand: '#217346',
    points: [
      'Production Excel Add-in exposing a multi-provider LLM agent directly inside the workbook, with a full agentic tool-use loop: read, write, chart, pivot, formatting.',
      'Unified adapter layer across 10+ LLM providers (OpenAI, Anthropic, Ollama, OpenRouter, DeepSeek, Groq, Mistral and others) plus a 5-provider web search layer (Tavily, Google CSE, Jina, SearXNG, Wikipedia) as agent-callable tools.',
      'Used as a hands-on case study in AI-integration workshops.',
    ],
    tech: [
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Excel Add-in' },
      { label: 'OpenAI', icon: 'openai' },
      { label: 'Anthropic', icon: 'anthropic' },
      { label: 'Ollama', icon: 'ollama' },
    ],
  },
  {
    name: 'AI Board Games',
    tagline: 'Local-first AI tabletop platform on Cloudflare Workers',
    url: 'https://aiboard.games',
    urlLabel: 'aiboard.games',
    icon: '',
    monogram: 'BG',
    img: '/logos/aiboardgames.png',
    brand: '#f38020',
    points: [
      'Six games (Splendor, Secret Hitler, Jungle Chess, Chinese Chess, Chess, Exploding Kittens) mixing local bot opponents with configurable LLM-driven seats.',
      'BYOK (Bring Your Own Key) multi-provider AI adapter (Anthropic, OpenAI, OpenRouter, local Ollama); API keys stay client-side in the browser, with per-game estimated AI token usage surfaced to players.',
      'Used live in corporate training as a demonstration of AI-assisted engineering.',
    ],
    tech: [
      { label: 'Cloudflare Workers', icon: 'cloudflareworkers' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Svelte', icon: 'svelte' },
      { label: 'Anthropic', icon: 'anthropic' },
      { label: 'OpenAI', icon: 'openai' },
    ],
  },
  {
    name: 'Wiki Globe',
    tagline: 'AI-powered 3D Earth and Solar System atlas',
    url: 'https://wikiglo.be',
    urlLabel: 'wikiglo.be',
    icon: '',
    monogram: 'WG',
    img: '/logos/wikiglobe.png',
    preserveLogoDetail: true,
    brand: '#6cadde',
    points: [
      'Built an AI map agent that researches questions, reasons across sources, highlights countries and draws answers directly onto the globe.',
      'Supports draggable true-size country and continent comparisons alongside live and reference overlays spanning weather, air quality, climate, economics, demographics, health and conflict.',
      'Tracks satellites, flights, ships, earthquakes, natural events and launches, with nearby Wikipedia discovery across Earth, the Moon, Mars, planets and major moons.',
    ],
    tech: [
      { label: 'CesiumJS', icon: 'cesium' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'OpenStreetMap', icon: 'openstreetmap' },
      { label: 'Wikipedia', icon: 'wikipedia' },
    ],
  },
  {
    name: 'Icon Learning (Website Rebuild)',
    tagline: 'Wix → custom static stack, driven by SEO & GEO goals',
    url: 'https://iconlearning.com.my',
    urlLabel: 'iconlearning.com.my',
    icon: '',
    monogram: 'IL',
    img: '/logos/icon.svg',
    brand: '#ff5d01',
    points: [
      'Architected the migration from Wix to a custom static site stack: Astro, Tailwind CSS and Cloudflare Pages.',
      'Driven by SEO and GEO (generative engine optimisation) goals, with a PR-based CI/CD workflow via GitHub Actions.',
    ],
    tech: [
      { label: 'Astro', icon: 'astro' },
      { label: 'Tailwind CSS', icon: 'tailwindcss' },
      { label: 'Cloudflare Pages', icon: 'cloudflarepages' },
      { label: 'GitHub Actions', icon: 'githubactions' },
    ],
  },
];

export const TRAINING = {
  role: 'Technical Trainer & Automation Consultant',
  company: 'Icon Learning & Development Sdn Bhd',
  companyUrl: 'https://iconlearning.com.my',
  icon: '',
  monogram: 'IL',
  location: 'Malaysia',
  period: 'Nov 2025 – Present',
  points: [
    'Developed HRD Corp-registered AI productivity curriculum with hands-on LLM API integration labs, multi-provider orchestration exercises and prompt engineering practice, built from direct production experience, not theory.',
    'Designing modular curriculum architecture scalable from 4-hour taster sessions to 3-day intensive formats, covering AI fluency, automation, data literacy and cybersecurity awareness.',
    'Technical advisor bridging business operations, automation strategy and AI adoption for Malaysian SME clients, translating enterprise-grade concepts (CI/CD, workflow automation, AI tools, data pipelines) into accessible learning for non-technical and semi-technical audiences.',
    'Every workshop is backed by live, deployed demonstrations (a production Excel AI add-in and Cloudflare-deployed apps) so participants work with real reference points rather than slideware.',
  ],
  highlights: [
    { label: 'Train the Trainer (TTT) Certified', icon: 'certificate' },
    { label: 'HRD Corp-registered curriculum', icon: 'building' },
    { label: 'Live demos, not slideware', icon: 'rocket' },
  ],
};

export interface Role {
  title: string;
  company: string;
  detail?: string;
  icon: string;
  monogram?: string;
  img?: string;
  brand?: string;
  location: string;
  period: string;
  points: string[];
  tech: TechChip[];
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Senior Systems Engineer, DevOps & DBA',
    company: 'ING Bank',
    detail: 'Reconciliations Platform',
    icon: '',
    img: '/logos/ing.png',
    brand: '#ff6200',
    location: 'Singapore',
    period: 'Nov 2020 – Oct 2025',
    points: [
      'Led DevOps and database engineering for the reconciliations IT team supporting daily P&L financial close, a high-stakes, zero-tolerance production environment.',
      'Architected and deployed SQL Server Always-On Availability Group infrastructure; managed full database and application migration to new servers.',
      'Built ETL pipelines processing 1M+ daily records, automated exception detection workflows and cross-ledger reconciliation logic.',
      'Collaborated directly with finance, audit and risk stakeholders on data correctness and incident resolution.',
      'Delivered CI/CD pipeline improvements and deployment automation, improving release reliability across the team.',
    ],
    tech: [
      { label: 'C#' },
      { label: '.NET', icon: 'dotnet' },
      { label: 'SQL Server' },
      { label: 'Azure' },
      { label: 'Azure Pipelines' },
      { label: 'Prometheus', icon: 'prometheus' },
      { label: 'Grafana', icon: 'grafana' },
    ],
  },
  {
    title: 'Senior Software Engineer (Contract)',
    company: 'NCS Pte Ltd',
    detail: 'Inland Revenue Authority of Singapore (IRAS-INFOD)',
    icon: '',
    img: '/logos/ncs.png',
    brand: '#002e6d',
    location: 'Singapore',
    period: 'Dec 2017 – Oct 2020',
    points: [
      'Full-stack developer building CRS and FATCA-compliant data exchange platforms enabling Automatic Exchange of Information (AEOI) across international treaty jurisdictions, conforming to OECD CRS and US FATCA schemas.',
      'Operated with significant autonomy; performance evaluated directly by client-side (IRAS) colleagues on a high-compliance government engagement.',
      'Built secure data exchange workflows under strict compliance and security controls.',
      'Self-initiated a Chrome extension automating manual browser-based workflows, reducing repetitive overhead for the team.',
    ],
    tech: [{ label: 'C#' }, { label: '.NET', icon: 'dotnet' }, { label: 'SQL Server' }],
  },
  {
    title: 'Software Engineer, Front-End & Mobile',
    company: 'Hitachi Hokenso',
    icon: 'hitachi',
    brand: '#e60027',
    location: 'Petaling Jaya, Malaysia',
    period: 'Sep 2016 – Dec 2017',
    points: [
      'Front-end and hybrid mobile developer; de facto technical reference for the team on project architecture and system behaviour.',
      'Led migration of project builds from Gulp to Webpack, improving development automation; automated manual deployment workflows with shell scripting.',
    ],
    tech: [
      { label: 'AngularJS', icon: 'angular' },
      { label: 'Apache Cordova', icon: 'apachecordova' },
      { label: 'Webpack', icon: 'webpack' },
      { label: 'Gulp', icon: 'gulp' },
      { label: 'Jenkins', icon: 'jenkins' },
      { label: 'Git', icon: 'git' },
    ],
  },
  {
    title: 'Software Engineer, Distribution Management Systems',
    company: 'Accenture Solutions',
    icon: 'accenture',
    brand: '#a100ff',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Sep 2014 – Aug 2016',
    points: [
      "Full-stack developer on Accenture's Distribution Management System serving regional clients.",
      'Informal technical authority and institutional knowledge resource: the go-to person for understanding how systems worked end-to-end.',
      'Automated manual workflows using batch scripts and ADB shell.',
    ],
    tech: [{ label: 'C#' }, { label: 'SQL Server' }, { label: 'Batch Scripting' }],
  },
];

export interface SkillGroup {
  title: string;
  emoji: string;
  skills: TechChip[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: 'Training & L&D',
    emoji: '🎓',
    skills: [
      { label: 'Curriculum Design' },
      { label: 'Workshop Facilitation' },
      { label: 'Technical Content Development' },
      { label: 'Modular Course Architecture' },
      { label: 'HRD Corp Compliance' },
      { label: 'Train the Trainer (TTT) Certified' },
    ],
  },
  {
    title: 'AI & Automation',
    emoji: '🤖',
    skills: [
      { label: 'LLM API Integration' },
      { label: 'Multi-Provider AI Orchestration' },
      { label: 'Prompt Engineering' },
      { label: 'Agentic Tool-Use Design' },
      { label: 'Workflow Automation' },
      { label: 'CI/CD Pipelines' },
    ],
  },
  {
    title: 'Languages & Frameworks',
    emoji: '⌨️',
    skills: [
      { label: 'C#' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'Python', icon: 'python' },
      { label: 'SQL' },
      { label: '.NET / .NET Core', icon: 'dotnet' },
      { label: 'Astro', icon: 'astro' },
      { label: 'Svelte', icon: 'svelte' },
      { label: 'AngularJS', icon: 'angular' },
    ],
  },
  {
    title: 'Platforms & Ops',
    emoji: '☁️',
    skills: [
      { label: 'SQL Server (AlwaysOn)' },
      { label: 'Azure' },
      { label: 'Cloudflare Workers / Pages', icon: 'cloudflare' },
      { label: 'GitHub Actions', icon: 'githubactions' },
      { label: 'Azure Pipelines' },
      { label: 'Jenkins', icon: 'jenkins' },
      { label: 'Prometheus', icon: 'prometheus' },
      { label: 'Grafana', icon: 'grafana' },
      { label: 'Shell / PowerShell / Batch' },
    ],
  },
  {
    title: 'LLM Providers',
    emoji: '🧠',
    skills: [
      { label: 'Anthropic', icon: 'anthropic' },
      { label: 'OpenAI', icon: 'openai' },
      { label: 'OpenRouter' },
      { label: 'DeepSeek' },
      { label: 'Ollama', icon: 'ollama' },
      { label: 'fal.ai' },
    ],
  },
];

export interface Credential {
  title: string;
  institution: string;
  detail?: string;
  monogram: string;
  img?: string;
  brand?: string;
  badge?: string;
}

export const EDUCATION: Credential[] = [
  {
    title: 'MSc in Artificial Intelligence',
    institution: 'Monash University Malaysia',
    detail: 'In progress',
    monogram: 'M',
    img: '/logos/monash-university.png',
    brand: '#006dae',
    badge: 'Current',
  },
  {
    title: 'BSc (Hons) Software Engineering',
    institution: 'Staffordshire University',
    monogram: 'SU',
    img: '/logos/staffordshire-university.png',
    brand: '#9e1b32',
  },
  {
    title: 'Diploma in Information Technology',
    institution: 'Asia Pacific University',
    monogram: 'APU',
    img: '/logos/apu.png',
    brand: '#1b2f5e',
  },
];

export const CERTIFICATIONS: Credential[] = [
  {
    title: 'Train the Trainer (TTT) Certification',
    institution: 'HRD Corp',
    detail: 'Certified to design and deliver HRD Corp-claimable training programmes in Malaysia',
    monogram: 'TTT',
    brand: '#0e7490',
    badge: 'Certified',
  },
];
