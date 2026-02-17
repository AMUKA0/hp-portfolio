export type ProjectEntry = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  awardLabel?: string;
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
};

export const projectTemplate: ProjectEntry = {
  slug: "example-project",
  title: "Example Project Title",
  summary: "One-sentence overview of what the project does.",
  problem: "What problem this project solves and for whom.",
  approach: "How you designed/built it (architecture, process, tradeoffs).",
  impact: "Measurable outcome or key result.",
  stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  awardLabel: "Hackathon Winner",
  githubUrl: "https://github.com/your-handle/example-project",
  liveUrl: "https://example-project-demo.com",
  devpostUrl: "https://devpost.com/software/example-project",
};

export const projects: ProjectEntry[] = [
  {
    slug: "marketpipe",
    title: "marketpipe",
    summary:
      "A Bash-first financial data pipeline and command-line analytics tool for Linux that ingests market data, computes indicators, generates signals, runs backtests, and renders historical/live dashboards.",
    problem:
      "Trading and market-monitoring workflows often rely on heavyweight runtimes and fragmented tooling, making deterministic CLI-based analysis difficult in constrained environments.",
    approach:
      "Implemented a GNU Bash-only, config-driven pipeline with strict mode and function-only modules under lib/. The flow covers watchlist ingestion, raw fetch, normalization, indicator computation, signal generation, backtesting, and dashboard rendering, with ISO-timestamped structured logging, per-symbol fault isolation, and offline-safe tests using mocked stream providers.",
    impact:
      "Delivered a maintainable and observable CLI architecture for end-to-end financial data analysis with deterministic outputs and resilient operation under partial-failure conditions.",
    stack: [
      "GNU Bash",
      "Linux CLI",
      "CSV Data Pipelines",
      "Structured Logging",
      "Backtesting",
      "Technical Indicators",
    ],
    githubUrl: "https://github.com/AMUKA0/marketpipe",
  },
  {
    slug: "housrwrlds",
    title: "HousrWrlds",
    summary:
      "A rent rewards platform that returns a percentage of rent paid through Housr as redeemable tokens at partnered stores or as rent discounts.",
    problem:
      "Traditional rent payments do not provide meaningful loyalty value, limiting opportunities for renters to convert recurring payments into practical rewards.",
    approach:
      "Built a full-stack web application with a Snowflake-backed relational database and API-driven data flows. The team started with separated frontend/backend streams, then converged on a cohesive Next.js architecture for faster integration and delivery.",
    impact:
      "Shipped a functioning cloud-based rewards platform and won Best Use of Snowflake API at GreatUniHack 2025.",
    stack: ["Next.js", "Node.js", "React", "Snowflake", "Tailwind"],
    awardLabel: "GreatUniHack Winner",
    githubUrl: "https://github.com/AMUKA0/man--chester-2",
    devpostUrl: "https://devpost.com/software/housrwrlds",
  },
];
