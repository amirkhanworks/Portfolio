export type Artifact = {
  label: string;
  href: string;
  type: "doc" | "deck" | "diagram" | "other";
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  timeframe: string;
  headline: string;
  tags: string[];
  executiveSummary: string[];
  problem: string;
  usersStakeholders: string[];
  constraints: string[];
  approach: string[];
  delivered: string[];
  impact: string[];
  learnings: string[];
  artifacts: Artifact[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-recruitment-saas-futurematch",
    title: "AI Recruitment SaaS — FutureMatch",
    client: "FutureMatch",
    role: "Product Manager / Analyst",
    timeframe: "2023–2024",
    headline:
      "Defined and iterated an AI-enabled matching engine to improve recruiter signal and candidate fit quality.",
    tags: ["B2B SaaS", "AI/ML", "Recruitment", "Product discovery"],
    executiveSummary: [
      "Worked with founders and engineering to clarify the core matching problem and prioritise high-signal data sources.",
      "Framed hypotheses around recruiter workflows, quality checks, and success definitions for matches.",
      "Structured experiments comparing AI-driven recommendations vs. manual shortlisting.",
      "Created a measurable definition of 'quality match' based on conversion and QC outcomes.",
      "Aligned roadmap around data coverage, model inputs, and recruiter UX, not just features."
    ],
    problem:
      "Traditional recruitment funnels over-indexed on CV keywords and job titles, creating noisy shortlists and high recruiter effort. FutureMatch needed a clearer, data-backed way to match candidates to roles and prove value to customers.",
    usersStakeholders: [
      "Recruiters inside FutureMatch and client organisations who qualify and shortlist candidates.",
      "Hiring managers who care about candidate quality, time-to-fill, and conversion.",
      "Data and engineering teams responsible for the matching engine and data ingestion.",
      "Founders and commercial leads who need a compelling story for customers and investors."
    ],
    constraints: [
      "Limited labelled outcome data in early stages; needed to bootstrap with proxy signals.",
      "Recruiters could not tolerate a slower workflow while experiments ran.",
      "Small engineering team with competing roadmap items (integrations, client commitments).",
      "Model interpretability had to be good enough for recruiters to trust suggestions."
    ],
    approach: [
      "Mapped current recruiter workflows and identified key decision points where AI could add value.",
      "Partnered with engineering to define the minimum viable data set for matching (skills, history, outcomes).",
      "Created PRDs for an 'Insights-first' candidate view that surfaces why a candidate is recommended.",
      "Instrumented key events to compare AI-ranked shortlists vs. manual order and track recruiter adjustments.",
      "Ran structured qualitative sessions with recruiters to understand where recommendations felt off and fed this back into prioritisation."
    ],
    delivered: [
      "PRD for AI-driven shortlisting and match explanation, with acceptance criteria tied to recruiter workflow.",
      "Backlog of data and integration work required to improve model inputs and coverage.",
      "Simple performance dashboard outline highlighting match throughput and QC results.",
      "Clear narrative for sales and customer success on how matching works and how it will improve."
    ],
    impact: [
      "Improved clarity on what 'good' looks like for a match (beyond CV similarity).",
      "Created a unified backlog that linked data, model, and UX changes to measurable quality outcomes.",
      "Baseline defined for future quantitative measurement (e.g. uplift in recruiter-accepted matches).",
      "Placeholder: X% reduction in manual screening time and Y% improvement in recruiter acceptance rate once fully rolled out."
    ],
    learnings: [
      "AI features must start from existing decision points, not from available algorithms.",
      "Early, explicit definitions of quality prevent misalignment between product, data science, and commercial teams.",
      "Recruiter trust depends as much on explanation and control as on raw model performance."
    ],
    artifacts: [
      {
        label: "Matching engine PRD (placeholder)",
        href: "#",
        type: "doc"
      },
      {
        label: "Recruiter workflow diagram (placeholder)",
        href: "#",
        type: "diagram"
      }
    ]
  },
  {
    slug: "azure-managed-services-migration-ifi-techsolutions",
    title: "Azure Managed Services & Migration — IFI Techsolutions",
    client: "IFI Techsolutions",
    role: "Technical Product Manager",
    timeframe: "2021–2023",
    headline:
      "Coordinated Azure migrations and 24/7 managed services to protect uptime while modernising critical workloads.",
    tags: ["Azure", "Cloud migration", "SRE", "Managed services"],
    executiveSummary: [
      "Owned planning and coordination for migrations of production workloads into Azure.",
      "Balanced reliability (99.95%+ SLA) with cost and delivery constraints.",
      "Aligned infra, applications, and monitoring teams on a single runbook per customer.",
      "Instituted clearer incident response roles and escalation paths.",
      "Improved transparency to customers with structured reporting on SLAs and changes."
    ],
    problem:
      "Customers needed to move legacy workloads into Azure without jeopardising uptime or blowing through budgets. Internally, teams operated with siloed views of infra, apps, and support, creating coordination risk during migrations and incidents.",
    usersStakeholders: [
      "Customer application owners accountable for uptime and business continuity.",
      "Internal infra and application engineers executing migrations and changes.",
      "24/7 operations / NOC staff handling alerts and incidents.",
      "Account managers and leadership who need confidence in meeting SLAs."
    ],
    constraints: [
      "Strict uptime commitments (target 99.95%+ SLA) for production systems.",
      "Maintenance windows often limited to narrow overnight or weekend slots.",
      "Mixed technology stacks and varying maturity of customer environments.",
      "Cost sensitivity on both Azure consumption and migration effort."
    ],
    approach: [
      "Created standardised migration playbooks covering discovery, cutover, rollback, and validation.",
      "Worked with engineers to define 'minimum viable observability' for each migrated workload.",
      "Structured change approval and communication flows so customers understood impact and risk.",
      "Instituted lightweight post-incident reviews focused on systemic fixes rather than blame.",
      "Co-ordinated cross-functional squads (infra, app, NOC) around shared views of priority work."
    ],
    delivered: [
      "Reusable migration runbook template adopted across multiple customer projects.",
      "Set of Azure landing zone and monitoring requirements for new workloads.",
      "Clear on-call and escalation model for 24/7 operations.",
      "Customer-facing reporting cadence for SLA, incidents, and upcoming changes."
    ],
    impact: [
      "Maintained or improved uptime for key customers through migration phases (target: 99.95% SLA).",
      "Reduced confusion and rework during cutovers by standardising runbooks.",
      "Improved signal-to-noise ratio in monitoring by clarifying what must be observable pre-cutover.",
      "Placeholder: X% reduction in incidents attributable to misconfigured monitoring or change coordination."
    ],
    learnings: [
      "Cloud migrations fail quietly when ownership and runbooks are unclear, not only when technology breaks.",
      "You cannot promise reliability without concrete observability and escalation design.",
      "Standardisation across customers increases quality without preventing tailored decisions where needed."
    ],
    artifacts: [
      {
        label: "Migration runbook template (placeholder)",
        href: "#",
        type: "doc"
      },
      {
        label: "SLA & incident reporting deck (placeholder)",
        href: "#",
        type: "deck"
      }
    ]
  },
  {
    slug: "iot-smart-home-launch-luminox",
    title: "IoT Smart Home Launch — Luminox",
    client: "Luminox",
    role: "Product Manager",
    timeframe: "2020–2021",
    headline:
      "Coordinated hardware, firmware, and app experiences to launch a connected smart home product on time.",
    tags: ["IoT", "Consumer", "Go-to-market", "Cross-functional"],
    executiveSummary: [
      "Aligned hardware, firmware, and mobile app teams around a single launch-critical scope.",
      "Defined minimum viable experience for pairing, control, and troubleshooting.",
      "Mapped key user journeys from unboxing to first successful automation.",
      "Worked with marketing and support to ensure expectations and documentation matched reality.",
      "Created feedback loops from early adopters into backlog refinement."
    ],
    problem:
      "Luminox needed to bring a new smart home device to market with a coherent user experience across hardware and software. Fragmented ownership and differing definitions of 'done' across teams threatened launch quality and timelines.",
    usersStakeholders: [
      "End customers setting up and using the smart home device in their homes.",
      "Hardware and firmware engineers building device capabilities and reliability.",
      "Mobile app team delivering control, automation, and status surfaces.",
      "Support and marketing teams fielding questions and shaping expectations."
    ],
    constraints: [
      "Fixed launch windows driven by retail and marketing commitments.",
      "Hardware lead times and manufacturing constraints limiting late changes.",
      "Need to avoid complex network setup flows that frustrate non-technical users.",
      "Limited analytics in early firmware versions; had to infer some behaviour qualitatively."
    ],
    approach: [
      "Defined a small set of launch-critical user journeys and aligned all teams around them.",
      "Specified pairing and setup flows with clear success criteria and fallback paths.",
      "Agreed on a baseline telemetry set to understand device health and app usage post-launch.",
      "Ran cross-functional reviews of app flows, device states, and edge cases.",
      "Documented known limitations and workarounds for support and marketing ahead of launch."
    ],
    delivered: [
      "Backlog and prioritisation for app and firmware features required for launch.",
      "Clear setup and troubleshooting flows documented for support content.",
      "Initial analytics requirements for understanding usage and failure modes.",
      "Launch review capturing decisions, trade-offs, and future iterations."
    ],
    impact: [
      "Launched the IoT product with a coherent end-to-end experience across hardware and software.",
      "Reduced setup friction by simplifying pairing and providing clearer guidance.",
      "Created a foundation for future feature iterations based on real-world usage.",
      "Placeholder: X% of customers successfully completed setup without contacting support in the first N days."
    ],
    learnings: [
      "For IoT, the 'product' is the entire system — device, app, network, and support — not any single component.",
      "Early, honest documentation of limitations builds trust with both customers and internal teams.",
      "Coordinating multiple disciplines requires explicit alignment on user journeys, not just feature lists."
    ],
    artifacts: [
      {
        label: "Launch-critical journeys doc (placeholder)",
        href: "#",
        type: "doc"
      },
      {
        label: "Setup & pairing flow diagram (placeholder)",
        href: "#",
        type: "diagram"
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

