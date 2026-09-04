// --- FEATURED CLIENT PROJECTS (Confidential Enterprise Platforms) ---
export const featuredProjects = [
  {
    id: 'commission-management-platform',
    featured: true,
    title: 'Financial Commission Calculation Platform',
    category: 'Financial Services & Backend Architecture',
    filterCategory: 'Finance & SaaS',
    confidentiality: 'Professional Project — Confidential',
    domain: 'Financial Services — Calculation & Payment Processing Engine',
    role: 'API Architecture & Core Calculation Engine Owner',
    period: 'Production Deployment',
    technologies: [
      '.NET 8',
      'SQL Server / Azure SQL',
      'EF Core 8',
      'Dapper / Stored Procedures',
      'JWT / Policy Auth',
      'Quartz.NET',
      'Serilog',
    ],
    summary:
      'Mission-critical financial calculation engine handling multi-tier commission rates, dynamic overrides, split percentages, clawbacks, reserves, and batch payment-run processing.',
    ownership: [
      'Scaffolded the foundational .NET 8 Web API solution across 5 core projects, establishing dependency injection scoping, repository abstractions, and dual-context data patterns adopted across the engineering team.',
      'Solely owned and engineered the core financial calculation engine, implementing temporal rate resolution, hierarchical revenue splits, clawback netting, and automated reserve release schedules.',
      'Engineered external financial statement ETL ingestion pipelines and authored high-performance SQL analytics procedures powering reporting dashboards.',
    ],
    architecture:
      'Layered N-tier .NET 8 API with centralized dependency injection and Quartz.NET scheduled processing. Leveraged a dual-context database strategy to bypass ORM hydration overhead on heavy reporting queries by streaming pre-formatted JSON directly from SQL Server.',
    challenges:
      'Handling intricate financial business rules where rates dynamically shift based on historical date windows, tiered hierarchies, and clawback liabilities, while ensuring calculations execute deterministically without altering historical records.',
    outcomes:
      'Automated end-to-end commission calculation and statement ingestion pipelines, eliminating manual calculation discrepancies and executing complex financial payrun aggregations deterministically across large transactional datasets.',
    technicalNotes:
      'Built centralized error-handling middleware with structured database logging, request validation pipelines, and cancellation token propagation across all asynchronous database queries.',
  },
  {
    id: 'multi-tenant-financial-saas',
    featured: true,
    title: 'Multi-Tenant Financial SaaS Platform',
    category: 'SaaS & Cloud Platforms',
    filterCategory: 'Finance & SaaS',
    confidentiality: 'Professional Project — Confidential',
    domain: 'Financial SaaS — Multi-Tenant Platform & Billing',
    role: 'Backend Architecture & Multi-Tenancy Engineer',
    period: 'Production Deployment',
    technologies: [
      '.NET 8',
      'Multi-Tenancy',
      'Azure SQL / Elastic Pools',
      'Stripe API & Webhooks',
      'EF Core 8',
      'Apache JMeter',
    ],
    summary:
      'Commercial multi-tenant SaaS adaptation of the financial calculation platform, featuring tenant account isolation, granular policy authorization, automated Stripe subscription provisioning, and dedicated database support via Azure SQL Elastic Pools.',
    ownership: [
      'Architected tenant isolation by embedding account identifiers into security tokens, enforced on every request through custom request filters and 40+ granular authorization policies.',
      'Integrated Stripe Checkout and webhook lifecycle listeners to automate customer onboarding, database schema provisioning, and real-time subscription status synchronization.',
      'Configured Azure SQL Elastic Pools for dynamic resource sharing across tenant databases and engineered idempotent Stripe webhook handlers with cryptographic signature validation.',
    ],
    architecture:
      'Multi-tenant layered .NET 8 architecture enforcing data segregation via request security filters, supporting shared multi-tenant databases and dedicated tenant databases via Azure SQL Elastic Pools alongside an event-driven payment webhook pipeline.',
    challenges:
      'Maintaining strict data isolation and historical ledger integrity while transitioning from a single-tenant system to a shared SaaS architecture, and resolving query performance bottlenecks under concurrent multi-tenant load.',
    outcomes:
      'Enabled commercial SaaS onboarding with automated subscription provisioning and isolated tenant database allocation across 400 staging tenants under concurrent load.',
    technicalNotes:
      'Implemented idempotent webhook handlers validating cryptographic signatures, provisioning tenant schemas, and handling automated renewal and failure workflows.',
  },
  {
    id: 'analytics-insights-platform',
    featured: true,
    title: 'Operations Analytics & Reporting Service',
    category: 'Logistics & High-Performance Data',
    filterCategory: 'Analytics & AI',
    confidentiality: 'Professional Project — Confidential',
    domain: 'Operations & Logistics — Fleet Tracking & Activity Analytics',
    role: 'Foundational Scaffolding & SQL Optimization Owner',
    period: 'Production Deployment',
    technologies: [
      '.NET Web API',
      'SQL Server',
      'T-SQL (Dynamic PIVOT, CTEs)',
      'JWT Authentication',
      'SSMS',
    ],
    summary:
      'Dedicated analytics and business intelligence companion service connected to a high-volume operations platform, delivering real-time activity metrics, equipment tracking, and multi-dimensional reporting.',
    ownership: [
      'Scaffolded the foundational .NET Web API solution, configuring dependency injection, connection pooling, shared utilities, and token authentication matching the primary application.',
      'Architected read-only database integration querying the operational database under strict write isolation, ensuring heavy reporting traffic cannot lock or mutate live operational records.',
      'Engineered dynamic, configuration-driven reporting queries and aggregation pipelines, reducing complex multi-table operational analytics from slow queries down to ~2 seconds in database profiling.',
    ],
    architecture:
      'Dedicated reporting service querying the operational database via a read-only account for strict write isolation, utilizing configuration-driven dynamic SQL procedures with database-level JSON formatting to reduce API serialization overhead.',
    challenges:
      'Aggregating large volumes of operational activity records across multiple dynamic grouping dimensions in real time without causing transaction locks on active operational schedules.',
    outcomes:
      'Delivered complex multi-dimensional aggregation queries executing in ~2 seconds during profiling, providing comprehensive operational dashboards with zero performance impact on live operational data.',
    technicalNotes:
      'Analyzed database execution plans to eliminate table scans, replacing correlated subqueries with indexed joins and structured common table expressions.',
  },
  {
    id: 'ai-legal-research-assistant',
    featured: true,
    title: 'Legal Intelligence & Document Research Platform',
    category: 'Practical AI & Asynchronous Pipelines',
    filterCategory: 'Analytics & AI',
    confidentiality: 'Professional Project — Confidential',
    domain: 'Legal Tech & Compliance — Document Intelligence & Grounded Q&A',
    role: 'Sole Backend & AI Pipeline Engineer',
    period: 'Production Deployment',
    technologies: [
      'Python',
      'aiohttp',
      'Azure OpenAI (GPT-4o, GPT-4.1)',
      'Anthropic Claude',
      'Voyage AI',
      'Azure AI Search',
      'Azure Durable Functions',
      'Azure Document Intelligence (OCR)',
      'PyPDF2',
      'PostgreSQL / SQLAlchemy',
    ],
    summary:
      'Retrieval-augmented generation (RAG) platform combining hybrid vector search, serverless document ingestion for 500+ page documents, and automated citation verification algorithms.',
    ownership: [
      'Solely engineered the Python backend REST API, retrieval engine, multi-model LLM abstraction, serverless processing pipeline, and PostgreSQL database layer (serving an Angular frontend built by a teammate).',
      'Built the hybrid retrieval pipeline combining legal embeddings with Azure AI Search hybrid vector indexing and semantic reranking, alongside an automated PDF segmentation algorithm overcoming the 500-page OCR boundary.',
      'Engineered rate-limiting safeguards against API throttling during bulk ingestion, automated post-generation citation verification to eliminate hallucinations, and server-side DOCX export.',
    ],
    architecture:
      'Decoupled system: asynchronous Python REST API serving a client SPA; long-running document ingestion offloaded to serverless Azure Durable Functions; hybrid vector search with semantic reranking; and pooled relational PostgreSQL storage.',
    challenges:
      'Ingesting and indexing massive documents (>500 pages) without exceeding OCR engine limits, avoiding embedding API rate limits during bulk ingestion, and guaranteeing source citation accuracy.',
    outcomes:
      'Delivered a deterministic research assistant capable of ingesting 500+ page documents asynchronously, retrieving relevant authorities via hybrid vector search, and generating audit-verified citations.',
    technicalNotes:
      'Implemented token-aware chunking with structural classification, enforced low-temperature deterministic completions, and utilized secure time-limited storage tokens for source document verification.',
  },
];

// --- STANDALONE PERSONAL OPEN-SOURCE PROJECT ---
export const personalProject = {
  id: 'cashbook',
  isPersonal: true,
  title: 'CashBook — Cross-Platform Desktop Financial Manager',
  category: 'Personal / Open Source',
  badge: 'Personal / Open Source',
  githubUrl: 'https://github.com/Shubh-27/cashbook',
  confidentiality: 'Personal / Open Source',
  domain: 'Desktop Financial Management — Offline Ledger & Subprocess Architecture',
  role: 'Solo Architect & Developer',
  period: 'Open Source · GitHub',
  testMetric: '127 Passing Tests (2s)',
  technologies: [
    '.NET 10',
    'C# 13',
    'React 19',
    'Electron 33',
    'SQLite',
    'xUnit & Moq',
    'Tailwind CSS v4',
    'Zustand 5',
    'TanStack Table',
  ],
  summary:
    'Modern, high-performance cross-platform desktop financial application featuring an ASP.NET Core (.NET 10 / C# 13) backend subprocess, React 19 UI, offline SQLite storage, live balance recalculation, and 127 passing automated xUnit/Moq tests.',
  highlights: [
    {
      label: 'Subprocess Architecture:',
      text: 'Electron 33 shell hosts React 19 UI and boots ASP.NET Core (.NET 10 / C# 13) backend as a native subprocess over local IPC.',
    },
    {
      label: 'High-Speed Ledger:',
      text: 'TanStack Table data grid with multi-column sorting, search filtering, Zustand 5 store, and offline SQLite persistence.',
    },
    {
      label: 'Automated Test Suite:',
      text: '127 passing xUnit & Moq tests running in ~2s across controllers, services, repositories, validators, and migrations.',
    },
  ],
  ownership: [
    'Architected the desktop application where an Electron 33 shell hosts the React 19 UI and orchestrates the ASP.NET Core (.NET 10) backend API as a native subprocess over local IPC.',
    'Implemented a high-performance data grid supporting multi-column sorting, search filtering, and optimistic state management with offline SQLite persistence.',
    'Engineered cross-platform packaging with automated GitHub Releases updates and built an automated test suite achieving 127 passing unit and integration tests in ~2 seconds.',
  ],
  architecture:
    'Desktop subprocess architecture: Electron 33 shell hosting a React 19 SPA communicating with a local ASP.NET Core (.NET 10 / C# 13) backend subprocess running EF Core 10 with SQLite.',
  challenges:
    'Managing native subprocess lifecycles across operating systems, handling local IPC communication, and achieving high-speed recalculation on extensive multi-account ledgers.',
  outcomes:
    'Delivered an offline-first desktop personal finance platform with sub-second recalculation and 127 passing automated tests covering controllers, repositories, and migrations.',
  technicalNotes:
    'Source code and test suite publicly available on GitHub (https://github.com/Shubh-27/cashbook). Test suite verifies database migrations, validation rules, and repository transactions.',
};

// Unified master array for modal lookups, URL hash syncing, and global references
export const projects = [
  ...featuredProjects,
  personalProject,
];
