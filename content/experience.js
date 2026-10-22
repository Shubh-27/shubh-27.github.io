export const experienceData = {
  company: 'Prioxis Technologies',
  companyNote: 'Formerly HypeTeq Software',
  role: 'Software Developer',
  period: 'August 2022 – December 2025 (~3.5 Years)',
  location: 'Ahmedabad, India',
  summary:
    'Grew from building individual features and maintaining legacy services to architecting 8+ projects from scratch, owning core financial calculation engines, optimizing high-volume SQL queries, and deploying cloud/RAG pipelines.',
  progression: [
    {
      stage: '1. Feature Implementation & Foundations',
      timeframe: 'Early Tenure',
      description:
        'Built full-stack features across .NET, SQL, and React, fixed bugs in legacy apps, and maintained production stability.',
    },
    {
      stage: '2. Full-Stack Independence & Feature Ownership',
      timeframe: 'Mid Tenure',
      description:
        'Took end-to-end ownership of features across the frontend, REST APIs, and database. Began setting up project structures, Dependency Injection scoping, and authentication pipelines for new codebases.',
    },
    {
      stage: '3. Domain Leadership & Core Engine Ownership',
      timeframe: 'Senior Tenure',
      description:
        'Solely owned and built the core commission calculation engine for a financial platform (time-based rate rules, tiered revenue splits, overrides, clawbacks, rolling reserves, payruns, and statement ETL). Built the SQL analytics layer behind the financial charts.',
    },
    {
      stage: '4. Architecture, SQL Optimization & Production Delivery',
      timeframe: 'Current & Recent',
      description:
        'Architected 8+ projects (.NET Web API, MVC, microservices, React/Next.js). Profiled and optimized queries on multi-million-row datasets down to a steady 3–4 seconds, eliminating timeouts and running dynamic BI aggregations in ~2s. Diagnosed production issues using Azure Monitor and Application Insights, and built serverless RAG pipelines with Azure Durable Functions.',
    },
  ],
  keyAchievements: [
    'Established initial solution architecture, DI containers, and authentication pipelines across 8+ projects.',
    'Sole owner of the core financial commission calculation engine repository, time-based rate rules, and payrun batch processing.',
    'Reduced multi-million-row reporting queries to a consistent 3–4 second response (detailed in the Impact section).',
    'Engineered multi-tenant SaaS adaptation with Stripe subscription provisioning, validated against a staging dataset of 400 tenants (~1M records) under 400 concurrent requests on a B1 Azure App Service plan.',
    'Architected backend REST APIs, serverless RAG pipeline (Azure Durable Functions), and 500+ page document segmentation for a legal AI platform.',
  ],
  additionalContributions:
    'Additional contributions included CMS/SEO platform extensions, internal HR and attendance tooling, and web platform migrations across multiple client engagements.',
};
