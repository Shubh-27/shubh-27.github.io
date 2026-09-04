export const experienceData = {
  company: 'Prioxis Technologies',
  companyNote: 'Formerly HypeTeq Software',
  role: 'Software Developer',
  period: 'August 2022 – December 2025 (~3.5 Years)',
  location: 'Ahmedabad, India',
  summary:
    'Progressed from feature implementation and existing system maintenance to foundational architecture ownership across 8+ builds, end-to-end delivery of complex business domains (financial calculation engines, SaaS multi-tenancy), large-data SQL optimization, and practical cloud/RAG systems.',
  progression: [
    {
      stage: '1. Feature Implementation & Foundations',
      timeframe: 'Early Tenure',
      description:
        'Implemented assigned features, worked across .NET, SQL, and React, resolved bugs in legacy applications, and maintained production stability while mastering full-stack workflows.',
    },
    {
      stage: '2. Full-Stack Independence & Feature Ownership',
      timeframe: 'Mid Tenure',
      description:
        'Took end-to-end ownership of complete features spanning frontend, REST APIs, and database layers. Began establishing initial project structures, Dependency Injection configurations, and authentication pipelines for new projects.',
    },
    {
      stage: '3. Domain Leadership & Core Engine Ownership',
      timeframe: 'Senior Tenure',
      description:
        'Solely owned and developed the core commission calculation engine repository for a financial platform (time-based rate selection, tiered revenue splits, user overrides, clawback deductions, rolling reserves, payruns, and statement processing). Built the underlying SQL analytics layer powering financial charts.',
    },
    {
      stage: '4. Architecture, SQL Optimization & Production Delivery',
      timeframe: 'Current & Recent',
      description:
        'Established foundational architectures across 8+ projects (.NET API, MVC, microservices, React/Next.js). Profiled and optimized heavy SQL queries against multi-million-row datasets down to a consistent 3–4 second response, eliminating query timeouts, and executing dynamic BI aggregations in ~2s. Diagnosed production issues using Azure Monitor and Application Insights. Built serverless applied AI/RAG solutions with Azure Durable Functions and supported teammates in technical delivery.',
    },
  ],
  keyAchievements: [
    'Established initial solution architecture, DI containers, and authentication pipelines across 8+ projects.',
    'Sole owner of the core financial commission calculation engine repository, time-based rate rules, and payrun batch processing.',
    'Reduced multi-million-row reporting queries to a consistent 3–4 second response — see Impact section.',
    'Engineered multi-tenant SaaS adaptation with Stripe subscription provisioning, validated against a staging dataset of 400 tenants (~1M records) under 400 concurrent requests on a B1 Azure App Service plan.',
    'Architected backend REST APIs, serverless RAG pipeline (Azure Durable Functions), and 500+ page document segmentation for a legal AI platform.',
  ],
  additionalContributions:
    'Additional contributions included CMS/SEO platform extensions, internal HR and attendance tooling, and web platform migrations across multiple client engagements.',
};
