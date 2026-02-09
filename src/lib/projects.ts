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
