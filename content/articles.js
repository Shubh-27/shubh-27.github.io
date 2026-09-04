export const technicalArticles = [
  {
    id: 'sql-query-optimization-execution-plans',
    title: 'SQL Query Optimization via Execution Plans & Indexing',
    category: 'Database Performance',
    tags: ['SQL Server', 'Execution Plans', 'CTEs', 'Query Tuning'],
    readTime: 'Engineering Note',
    summary:
      'Diagnosing table scans, key lookups, and costly joins in large datasets by reading execution plans in SSMS, and restructuring queries into CTEs and covering non-clustered indexes.',
    takeaways: [
      'Pinpointing expensive clustered index scans and converting them to index seeks with targeted non-clustered index definitions.',
      'Refactoring nested subqueries into Common Table Expressions (CTEs) and window functions (ROW_NUMBER, DENSE_RANK, SUM() OVER) for cleaner execution paths.',
      'Analyzing SQL Server statistics IO and execution durations to systematically measure optimization improvements under load.',
    ],
  },
  {
    id: 'dependency-injection-project-architecture',
    title: 'Establishing Scalable DI & Layered Architecture in .NET 8',
    category: 'Software Architecture',
    tags: ['.NET 8', 'Dependency Injection', 'Unit of Work', 'Clean Boundaries'],
    readTime: 'Engineering Note',
    summary:
      'Practical patterns for establishing initial .NET API solution structures, modular DI registrations with proper lifetime scoping, Generic Repository abstractions, and Unit of Work coordination.',
    takeaways: [
      'Structuring service registrations with domain-specific service collection extension methods to keep Program.cs clean and maintainable.',
      'Implementing lifetime scoping best practices: Scoped for repositories and DbContexts, Transient for Unit of Work coordinators, and Singleton for stateless utilities.',
      'Enforcing strict DTO boundaries and CancellationToken propagation across asynchronous database pipelines.',
    ],
  },
  {
    id: 'practical-rag-durable-functions',
    title: 'Asynchronous Document Processing in RAG with Azure Durable Functions',
    category: 'Cloud & Practical AI',
    tags: ['Azure Durable Functions', 'RAG', 'Azure AI Search', 'Embeddings'],
    readTime: 'Engineering Note',
    summary:
      'Architecting resilient serverless ingestion pipelines that prevent long-running OCR, chunking, and vector embedding on 500+ page documents from blocking interactive user APIs.',
    takeaways: [
      'Decoupling document upload from heavy OCR and vector generation using Durable Functions orchestrator and activity patterns.',
      'Designing an automated PDF segmentation algorithm to overcome the 500-page limit in OCR engines while preserving cumulative page offsets.',
      'Implementing in-memory sliding-window rate limiters to prevent HTTP 429 exceptions when batching embedding API requests.',
    ],
  },
  {
    id: 'production-debugging-azure-telemetry',
    title: 'Diagnosing Production Bottlenecks with Azure Monitor & Application Insights',
    category: 'DevOps & Reliability',
    tags: ['Azure Monitor', 'Application Insights', 'Production Debugging', 'Telemetry'],
    readTime: 'Engineering Note',
    summary:
      'A methodical approach to troubleshooting production bugs, memory spikes, and differentiating application code issues from cloud resource exhaustion.',
    takeaways: [
      'Correlating failed HTTP requests with database query execution durations using end-to-end transaction telemetry in Application Insights.',
      'Tracing code execution paths and using structured Serilog database logs to reproduce complex financial calculation edge cases locally.',
      'Correlating application error spikes with Azure App Service CPU/memory metrics and database DTU/vCore utilization to isolate infrastructure bottlenecks.',
    ],
  },
];
