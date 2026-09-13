export const profile = {
  name: "Tushar Kulkarni",
  handle: "tsk0211",
  title: "AI Engineer | Backend, LLM and Agentic Systems",
  location: "Pune, India",
  email: "tusharkulkarni2002@gmail.com",
  github: "https://github.com/tsk0211",
  linkedin: "https://linkedin.com/in/tsk0211",
  summary:
    "AI/LLM Engineer with two years of experience building production backend and AI systems across Java and Python. Experienced in designing scalable architectures, developing production-grade GenAI systems, and working across the stack from implementation to deployment. Currently deepening expertise in Spring AI as enterprise AI adoption moves toward Spring-based tooling.",
};

export const skillGroups = [
  { key: "languages", label: "Languages", items: ["Java", "Python", "C/C++", "JavaScript"] },
  {
    key: "backend",
    label: "Backend",
    items: ["Spring Boot", "Spring AI", "Microservices", "REST APIs", "OAuth2/JWT", "JNI", "FastAPI", "Async and Streaming"],
  },
  {
    key: "ai_llm",
    label: "AI / LLM",
    items: [
      "RAG Pipelines",
      "Embeddings",
      "Agentic Workflows",
      "Tool Calling",
      "MCP",
      "Prompt Engineering and Versioning",
      "LLM Provider Integration (Anthropic, OpenAI, Google AI, Ollama)",
      "Google ADK",
    ],
  },
  {
    key: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Weaviate", "Pinecone", "pgvector"],
  },
  {
    key: "cloud_devops",
    label: "Cloud and DevOps",
    items: [
      "AWS Lambda",
      "AWS Batch",
      "S3",
      "EC2",
      "Cognito",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Deployment Automation",
      "ETL Pipelines",
      "ELK Stack observability",
    ],
  },
  {
    key: "testing_messaging",
    label: "Testing and Messaging",
    items: ["JUnit", "PyTest", "Kafka", "Amazon SQS", "RabbitMQ"],
  },
  {
    key: "practices",
    label: "Practices",
    items: ["System Design", "Multi-Tenant Architecture", "SOLID", "Design Patterns", "Technical Leadership", "End-to-End Ownership"],
  },
];

export const experience = [
  {
    company: "Zimetrics Technology Pvt. Ltd.",
    location: "Pune, India",
    dateRange: "Aug 2024 - Present",
    roles: [
      { title: "Software Engineer II", dateRange: "Mar 2026 - Present" },
      { title: "Java Software Developer", dateRange: "Aug 2024 - Mar 2026" },
    ],
    bullets: [
      "Owned three production systems from design through deployment and support, including ETL pipelines, enterprise integrations, and security-critical native modules.",
      "Led the integration workstream on a multi-developer project, coordinating interface contracts across team members and unblocking the integration phase to keep delivery on schedule.",
      "Implemented centralized observability with the ELK stack (Elasticsearch, Logstash, Kibana), replacing per-server log-file inspection with searchable structured logs and Kibana dashboards as the team's first step in diagnosing production incidents.",
      "Diagnosed and resolved production issues blocking live business workflows; drove adoption of GenAI and agentic systems alongside assigned work.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tag: "Self-Initiated" | "Production";
  description: string;
  bullets: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "multi-provider-spring-ai-agentic-platform",
    name: "Multi-Provider Spring AI Agentic Platform",
    tag: "Self-Initiated",
    description:
      "Provider-agnostic agentic chat platform designed as an extensible base any product can build custom integrations on top of.",
    bullets: [
      "Built a single chat interface routing to Anthropic, OpenAI, Google AI, and Ollama through one unified configuration, with no code change required to swap providers.",
      "Implemented a RAG pipeline and a custom Spring AI agentic workflow engine after evaluating Google's Java ADK and finding it too rigid.",
      "Architected for open-ended extension so new tools and custom MCP integrations register without touching the core, allowing project scope to grow with the use case instead of capping it.",
      "Added a hardened authentication layer and a reworked UI and made the platform deployable through self-built infrastructure tooling.",
    ],
    tech: ["Java", "Spring Boot", "Spring AI", "RAG", "Agentic Workflows", "MCP", "Tool Calling"],
  },
  {
    slug: "multi-source-knowledge-base-etl-platform",
    name: "Multi-Source Knowledge Base ETL Platform",
    tag: "Production",
    description:
      "Secure ingestion layer keeping an AI assistant's knowledge base real-time fresh, after the client would not accept stale source documents.",
    bullets: [
      "Designed and built pipelines for 4 upstream sources: Meta Marketing Ads API (Python) and SharePoint plus MasterControl (Java), each with its own auth and delta-detection model.",
      "Processed Meta ad metrics end-to-end on AWS Batch and Lambda, and diagnosed a batch state-handling defect that was silently dropping 21% of records (388 of 492 ingested), restoring 100% ingestion accuracy.",
      "Built S3-based prompt versioning for zero-redeploy LLM prompt updates, plus a producer-consumer sync layer with OAuth2 token lifecycle, retries, and failure alerting.",
    ],
    tech: ["Python", "Java", "Spring Boot", "AWS Batch", "AWS Lambda", "S3", "OAuth2", "ETL", "LLM Integration"],
  },
  {
    slug: "jni-licensing-and-anti-piracy-module",
    name: "JNI Licensing and Anti-Piracy Module",
    tag: "Production",
    description:
      "Org-wide licensing layer built after a recurring license-enforcement gap surfaced across the team's Spring Boot products.",
    bullets: [
      "Shipped as a drop-in dependency plus one startup-hook class, reducing integration work for consuming teams to a single class and enabling adoption across every Spring Boot product in the org.",
      "Moved key decoding and validation into a native C/C++ library invoked via JNI, so licensing logic cannot be read or tampered with from the Java layer.",
      "Applied ProGuard obfuscation so the security class cannot be located or stripped, added NTP-based clock-rollback detection, and enabled feature-flag-level access control per license.",
    ],
    tech: ["Java", "JNI", "C/C++", "ProGuard", "NTP", "Runtime Security"],
  },
  {
    slug: "genai-chatbot-content-campaign",
    name: "GenAI Chatbot for Content Generation and Campaign Management",
    tag: "Production",
    description:
      "Company's core GenAI product, sold both hosted and as licensed on-prem deployments, inherited from the Python GenAI team with recurring stability issues.",
    bullets: [
      "Re-engineered the Java-Python backend integration and resolved recurring FastAPI rate-limit failures that were causing production downtime.",
      "Containerized the app with run-anywhere deployment scripts, eliminating 100% of the manual setup steps in the previous release process; added dev/test/prod profiles, build-verification tests, transcription handling, and Cognito auth.",
    ],
    tech: ["Java", "Spring Boot", "Python", "FastAPI", "Docker", "AWS Cognito", "LLM Integration"],
  },
  {
    slug: "reusable-authentication-and-security-module",
    name: "Reusable Authentication and Security Module",
    tag: "Self-Initiated",
    description:
      "Centralized authentication layer that any internal project can attach to for a consistent security baseline, built proactively to replace ad hoc, per-project auth implementations.",
    bullets: [],
    tech: ["Java", "Spring Boot", "Spring Security", "OAuth2", "JWT"],
  },
];

export const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "Savitribai Phule Pune University (SPPU), Pune",
    dateRange: "2020 - 2024",
  },
];
