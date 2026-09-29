export const baseUrl = 'https://shubh-27.github.io/';

export const siteMetadata = {
  title: {
    default: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
    template: '%s | Shubh Thakkar',
  },
  description:
    'Portfolio of Shubh Thakkar — Backend Software Engineer specializing in C#, .NET 8, SQL Server query optimization, Azure, and practical AI/RAG architectures.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
    description:
      'Backend architecture, financial calculation engines, high-performance SQL optimization, and cloud systems.',
    url: baseUrl,
    siteName: 'Shubh Thakkar Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://shubh-27.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shubh Thakkar, Backend Software Engineer / .NET Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
    description:
      'Backend architecture, financial calculation engines, high-performance SQL optimization, and cloud systems.',
    images: ['https://shubh-27.github.io/og-image.png'],
  },
};

export const siteContent = {
  baseUrl,
  siteMetadata,
  brand: {
    name: 'Shubh Thakkar',
    role: 'Backend Software Engineer / .NET Developer',
    shortRole: '/ backend .NET',
  },
  hero: {
    kicker: 'Backend Software Engineer / .NET Developer',
    headline: 'I take backend systems from architecture to production.',
    subheadline:
      'Around 3.5 years of continuous professional software engineering experience architecting .NET APIs, owning core financial calculation engines, optimizing high-volume SQL Server databases, and building practical cloud & RAG pipelines.',
    location: 'Open to Remote / Relocation anywhere in India',
    primaryStack: [
      'C#',
      '.NET 8',
      'SQL Server',
      'Azure',
      'REST APIs',
      'PostgreSQL',
      'React / Next.js',
    ],
    cta: {
      primary: { label: 'View Featured Projects', href: '#featured-projects' },
      secondary: { label: 'Explore Capabilities', href: '#capabilities' },
      linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/shubh-thakkar', external: true },
      github: { label: 'GitHub', href: 'https://github.com/Shubh-27', external: true },
      resume: { label: 'Download Resume', href: 'resume.pdf' },
    },
  },
  about: {
    heading: 'Engineering Profile',
    kicker: 'About / Technical Background',
    paragraphs: [
      'I am a backend-focused software engineer specializing in C#, .NET 8, SQL Server, and Azure. Over ~3.5 years of continuous professional experience, I have progressed from foundational feature implementation to establishing project architectures from scratch across 8+ builds, owning complex calculation domains, and delivering enterprise platforms to production.',
      'My deepest domain ownership is in financial calculations and SaaS multi-tenancy. I owned the core commission calculation engine end-to-end — implementing time-based rate profile selection, tiered revenue splits, client overrides, deduction clawbacks, indemnity rolling reserves with automated payback schedules, and external statement ETL ingestion. I also authored the underlying high-performance SQL analytics layer powering reporting dashboards.',
      'SQL performance and database optimization are among my strongest competencies. I regularly profile large datasets, analyze SQL execution plans in SSMS, restructure complex queries into efficient CTEs and indexed joins, and eliminate database bottlenecks. I also have practical hands-on experience building asynchronous serverless RAG pipelines with Azure OpenAI, Azure AI Search, and Azure Durable Functions.',
    ],
    principles: [
      {
        title: 'Architecture & Foundation Ownership',
        description: 'Established the initial API structure, Dependency Injection lifetime scoping, authentication pipelines, and shared infrastructure across 8+ projects for team builds.',
      },
      {
        title: 'Deep Business Domain Logic',
        description: 'Built complex financial engines end-to-end with strict calculation accuracy, time-based rules, and transactional integrity.',
      },
      {
        title: 'Data & Performance First',
        description: 'Rely on execution plans, index tuning, and query profiling rather than guessing when optimizing heavy database workloads.',
      },
      {
        title: 'Production Troubleshooting',
        description: 'Methodically isolate code bugs from infrastructure bottlenecks using Azure Monitor, Application Insights, and structured telemetry.',
      },
    ],
    openTo: {
      heading: 'Current Focus & Availability',
      items: [
        '.NET / C# Backend Engineer roles',
        'Backend / Systems Software Engineer roles',
        'Open to Remote / Relocation anywhere in India',
      ],
    },
  },
  contact: {
    heading: "Let's talk about an engineering role.",
    subtext:
      'Looking for opportunities where I can contribute to reliable backend architecture, high-performance data systems, and end-to-end product delivery.',
    email: 'sthakkar2705@gmail.com',
    linkedin: 'https://linkedin.com/in/shubh-thakkar',
    github: 'https://github.com/Shubh-27',
    resumeUrl: 'resume.pdf',
    location: 'Open to Remote / Relocation anywhere in India',
  },
  footer: {
    tagline: 'Shubh Thakkar — Backend Software Engineer / .NET Developer',
    note: 'Engineered with Next.js',
  },
};
