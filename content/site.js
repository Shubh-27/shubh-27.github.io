export const baseUrl = 'https://shubh-27.github.io/';

export const siteMetadata = {
  title: {
    default: 'Shubh Thakkar | Backend Software Engineer / .NET Developer',
    template: '%s | Shubh Thakkar',
  },
  description:
    'Portfolio of Shubh Thakkar, Backend Software Engineer specializing in C#, .NET 8, SQL Server query optimization, Azure, and practical AI/RAG architectures.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Shubh Thakkar | Backend Software Engineer / .NET Developer',
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
    title: 'Shubh Thakkar | Backend Software Engineer / .NET Developer',
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
      'Backend software engineer with ~3.5 years of experience building .NET APIs, owning core financial calculation engines, optimizing high-volume SQL Server databases, and deploying cloud & RAG pipelines.',
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
      resume: { label: 'Download Resume', href: '/resume.pdf' },
    },
  },
  about: {
    heading: 'Engineering Profile',
    kicker: 'About / Technical Background',
    paragraphs: [
      "I specialize in C#, .NET 8, SQL Server, and Azure. Over the past 3.5 years, I've grown from writing day-to-day features to architecting 8+ projects from scratch, owning complex financial calculation logic, and shipping enterprise systems to production.",
      'Most of my work centers on financial calculations and multi-tenant SaaS. I owned the core commission calculation engine end-to-end: time-based rate profiles, tiered revenue splits, client overrides, clawbacks, rolling reserves with automated payback schedules, and external statement ETL ingestion. I also built the SQL analytics layer behind the reporting dashboards.',
      "Database performance is a core part of what I do. Rather than guessing, I profile workloads in SSMS, inspect execution plans, restructure heavy queries into CTEs and indexed joins, and eliminate bottlenecks. I've also built asynchronous serverless RAG pipelines using Azure OpenAI, Azure AI Search, and Azure Durable Functions.",
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
      'Open to backend and .NET engineering roles focused on reliable architecture, database performance, and building production systems.',
    email: 'sthakkar2705@gmail.com',
    linkedin: 'https://linkedin.com/in/shubh-thakkar',
    github: 'https://github.com/Shubh-27',
    resumeUrl: '/resume.pdf',
    location: 'Open to Remote / Relocation anywhere in India',
  },
  footer: {
    tagline: 'Shubh Thakkar | Backend Software Engineer / .NET Developer',
    note: 'Engineered with Next.js',
  },
};
