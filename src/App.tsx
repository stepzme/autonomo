import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  PackageCheck,
  Plus,
  Rocket,
  ShoppingCart,
  Sparkles,
  UsersRound,
  Video,
  WalletCards,
} from "lucide-react";
import type { ComponentType, FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";

const asset = (path: string) => path;

type Segment = {
  label: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  benefits: {
    title: string;
    description: string;
    image: string;
  }[];
};

type Integration = {
  title: string;
  description: string;
  status: "Free" | "$ Paid";
  icons: string[];
};

const solutionImage = asset("/assets/screen-solutions.png");

const segments: Segment[] = [
  {
    label: "Freelancers & Agencies",
    title: "Freelancers & Agencies",
    description: "Operate with projects, tasks, clients and generate invoices",
    Icon: Rocket,
    benefits: [
      {
        title: "Track clients, projects and tasks",
        description: "Keep your delivery pipeline visible from first brief to final invoice.",
        image: solutionImage,
      },
      {
        title: "Time tracking and task estimations",
        description: "Compare planned effort with real work and keep billing predictable.",
        image: solutionImage,
      },
      {
        title: "Auto calculations and invoices",
        description: "Generate clear invoices from tracked tasks, rates and project totals.",
        image: solutionImage,
      },
    ],
  },
  {
    label: "Content creators",
    title: "Content creators",
    description: "Plan your activity, automate content creation and delivery",
    Icon: Video,
    benefits: [
      {
        title: "Plan campaigns and channels",
        description: "Map ideas, briefs, publishing stages and deliverables in one workspace.",
        image: solutionImage,
      },
      {
        title: "Automate content delivery",
        description: "Move assets through review, scheduling and publication without extra tools.",
        image: solutionImage,
      },
      {
        title: "Track output and workload",
        description: "See what is ready, what is blocked and what needs attention next.",
        image: solutionImage,
      },
    ],
  },
  {
    label: "Online shops & Dropshipping",
    title: "Online shops & Dropshipping",
    description: "List your goods, track financial data and manage supplies",
    Icon: ShoppingCart,
    benefits: [
      {
        title: "Manage product catalogs",
        description: "Keep products, suppliers, stock and operational notes connected.",
        image: solutionImage,
      },
      {
        title: "Track supplies and availability",
        description: "Follow item status, restock timing and supplier responsibilities.",
        image: solutionImage,
      },
      {
        title: "Monitor financial data",
        description: "Keep expenses, revenue and fulfillment activity visible together.",
        image: solutionImage,
      },
    ],
  },
  {
    label: "Beauty & Health",
    title: "Beauty & Health",
    description: "Keep your booking calendar and service catalog in one place",
    Icon: HeartPulse,
    benefits: [
      {
        title: "Build a booking calendar",
        description: "Organize appointments, services and staff schedules around one source.",
        image: solutionImage,
      },
      {
        title: "Track client history",
        description: "Keep visits, preferences and notes attached to each client profile.",
        image: solutionImage,
      },
      {
        title: "Plan employee schedules",
        description: "Coordinate shifts, availability and services across your team.",
        image: solutionImage,
      },
    ],
  },
  {
    label: "Education",
    title: "Education",
    description: "Store students' progress data, deliver content and manage graduation",
    Icon: BookOpen,
    benefits: [
      {
        title: "Track student progress",
        description: "Connect students, lessons, assignments and outcomes in one workspace.",
        image: solutionImage,
      },
      {
        title: "Deliver learning content",
        description: "Organize lessons, materials and access around each cohort.",
        image: solutionImage,
      },
      {
        title: "Manage graduation flow",
        description: "Follow milestones and completion status without spreadsheet drift.",
        image: solutionImage,
      },
    ],
  },
];

const integrations: Integration[] = [
  {
    title: "Client management",
    description: "Manage your client database and calculate metrics like NPS and LTV.",
    status: "Free",
    icons: ["N", "CRM", "DB"],
  },
  {
    title: "Task statuses and progress",
    description: "Bring Asana, Trello or Jira tasks into Notion to see the latest updates.",
    status: "Free",
    icons: ["N", "A", "T", "J"],
  },
  {
    title: "Online booking for services",
    description: "Create a booking form and get submissions right in a Notion database.",
    status: "$ Paid",
    icons: ["N", "Cal"],
  },
  {
    title: "Employee schedule",
    description: "Track employee activities across multiple calendars and databases.",
    status: "Free",
    icons: ["N", "Cal", "HR"],
  },
  {
    title: "Docs generation",
    description: "Generate documents like reports or invoices in PDF and CSV format.",
    status: "Free",
    icons: ["N", "PDF", "CSV"],
  },
  {
    title: "Financial accounting",
    description: "Track your business income and expenses with real-time transactions.",
    status: "$ Paid",
    icons: ["N", "Bank", "Pay"],
  },
  {
    title: "Supplies management",
    description: "Manage your store catalog and adjust item availability.",
    status: "$ Paid",
    icons: ["N", "Box", "POS"],
  },
  {
    title: "Salary calculations",
    description: "Calculate employee salaries based on rate and hours spent.",
    status: "Free",
    icons: ["N", "HR", "$"],
  },
  {
    title: "Knowledge base",
    description: "Keep and grow your team's knowledge in a well-organized wiki space.",
    status: "Free",
    icons: ["N", "Wiki"],
  },
  {
    title: "Content planning",
    description: "Plan your social media activity and automate posting.",
    status: "Free",
    icons: ["N", "IG", "Post"],
  },
  {
    title: "Automation templates",
    description: "Connect the apps you need and get data instantly in Notion.",
    status: "Free",
    icons: ["N", "Zap", "API"],
  },
];

const featureIcons = [
  UsersRound,
  LayoutDashboard,
  CalendarDays,
  Clock3,
  FileText,
  WalletCards,
  PackageCheck,
  ChartNoAxesCombined,
  GraduationCap,
  Sparkles,
  Rocket,
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setReduced(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}

function useCountdown() {
  const target = useMemo(() => Date.UTC(2026, 5, 30, 21, 0, 0), []);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const diff = Math.max(0, target - now);
  const minutesTotal = Math.floor(diff / 60_000);
  const days = Math.floor(minutesTotal / (60 * 24));
  const hours = Math.floor((minutesTotal / 60) % 24);
  const minutes = minutesTotal % 60;

  return { days, hours, minutes };
}

function Header() {
  const [openMenu, setOpenMenu] = useState<"Solutions" | "Integrations" | null>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const toggleMenu = (label: "Solutions" | "Integrations") => {
    setOpenMenu((current) => (current === label ? null : label));
  };

  const scrollToWaitlist = () => {
    document.getElementById("waitlist-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="nav-left" aria-label="Primary">
        {(["Solutions", "Integrations"] as const).map((label) => (
          <div className="nav-menu" key={label}>
            <button
              className="text-button"
              type="button"
              aria-expanded={openMenu === label}
              aria-controls={`${label.toLowerCase()}-menu`}
              onClick={() => toggleMenu(label)}
            >
              {label}
              <ChevronDown className="size-5" strokeWidth={2} />
            </button>
            <div
              id={`${label.toLowerCase()}-menu`}
              className={`dropdown-shell ${openMenu === label ? "is-open" : ""}`}
              aria-hidden={openMenu !== label}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        ))}
      </nav>

      <a className="brand-link" href="#" aria-label="Autonomo home">
        <img src={asset("/assets/logo-header.svg")} alt="Autonomo" />
      </a>

      <button className="button button-outline header-cta" type="button" onClick={scrollToWaitlist}>
        Join waitlist
        <ArrowRight className="size-5" strokeWidth={2} />
      </button>
    </header>
  );
}

function EmailForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement | null;
    if (!email?.checkValidity()) {
      email?.reportValidity();
      return;
    }

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 650);
  };

  if (status === "success") {
    return (
      <div className={`success-panel ${compact ? "success-panel-compact" : ""}`} role="status">
        <span className="success-icon">
          <Check className="size-5" strokeWidth={2.5} />
        </span>
        <div>
          <strong>You're on the list</strong>
          <p>We'll save your seat for the first Autonomo release.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={compact ? "final-email" : "hero-email"}>
        Email address
      </label>
      <input
        id={compact ? "final-email" : "hero-email"}
        name="email"
        type="email"
        placeholder="Enter your e-mail"
        required
        autoComplete="email"
      />
      <button className="button button-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining" : "Join waitlist"}
        <ArrowRight className="size-5" strokeWidth={2} />
      </button>
    </form>
  );
}

function Hero() {
  return (
    <section className="hero-section section-paper">
      <Header />
      <div className="hero-inner content-container">
        <h1 className="hero-title">
          <span>
            Manage
            <img className="title-icon title-icon-all" src={asset("/assets/span-hero-all.svg")} alt="" />
            <strong>all</strong> your business
          </span>
          <span>
            right in
            <img className="title-icon title-icon-notion" src={asset("/assets/span-hero-notion.svg")} alt="" />
            Notion
          </span>
        </h1>
        <div className="hero-form-block">
          <p>Be the first to get access to automated business management workflows and templates</p>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

function BestFits() {
  return (
    <section className="best-fits section-paper">
      <div className="content-container">
        <p className="eyebrow">Best fits for</p>
        <div className="audience-grid">
          {segments.map(({ Icon, title, description }) => (
            <article className="audience-card reveal-card" key={title}>
              <Icon className="audience-icon" strokeWidth={1.9} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotionEducation() {
  return (
    <section className="notion-section section-paper" id="notion">
      <div className="content-container split-heading">
        <h2>
          Never heard about Notion?
          <br />
          We'll teach you!
        </h2>
        <div className="notion-copy">
          <div className="app-row" aria-hidden="true">
            <span className="app-icon notion-icon">N</span>
            <span>instead of</span>
            <span className="app-icon google-icon">G</span>
            <span>or</span>
            <span className="app-icon microsoft-icon">M</span>
          </div>
          <p>
            Create complex systems in an Excel-like interface with extended features like formulas,
            rollups, relations and automations.
          </p>
          <button className="button button-outline" type="button">
            Notion guides
            <ArrowRight className="size-5" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="content-container product-screen-wrap">
        <img
          className="product-screen notion-screen"
          src={asset("/assets/screen-notion.png")}
          alt="Notion project dashboard preview"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function SolutionsGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const reducedMotion = useReducedMotion();
  const segment = segments[activeTab];
  const selectedBenefit = segment.benefits[activeCard];

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % segment.benefits.length);
    }, 4_200);
    return () => window.clearInterval(timer);
  }, [activeTab, activeCard, reducedMotion, segment.benefits.length]);

  const selectTab = (index: number) => {
    setActiveTab(index);
    setActiveCard(0);
  };

  return (
    <section className="solutions-section" id="solutions">
      <div className="content-container solutions-heading">
        <p className="eyebrow centered">Solutions</p>
        <h2>Online or offline business? We fit both!</h2>
        <p>
          Create ready-to-use workspaces for any small business flow, from client delivery to
          inventory and scheduling.
        </p>
      </div>

      <div className="content-container segment-tabs" role="tablist" aria-label="Business segments">
        {segments.map((item, index) => (
          <button
            key={item.label}
            className={index === activeTab ? "is-active" : ""}
            type="button"
            role="tab"
            aria-selected={index === activeTab}
            onClick={() => selectTab(index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="content-container gallery-panel">
        <div className="advantage-stack">
          {segment.benefits.map((benefit, index) => (
            <button
              key={benefit.title}
              className={`advantage-card ${index === activeCard ? "is-active" : ""}`}
              type="button"
              onClick={() => setActiveCard(index)}
            >
              <span>
                <strong>{benefit.title}</strong>
                <small>{benefit.description}</small>
              </span>
              {index === activeCard && !reducedMotion ? (
                <i className="card-progress" key={`${activeTab}-${activeCard}`} />
              ) : null}
            </button>
          ))}
        </div>
        <div className="gallery-screen">
          <img src={selectedBenefit.image} alt={`${segment.title}: ${selectedBenefit.title}`} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({ item, index }: { item: Integration; index: number }) {
  const FeatureIcon = featureIcons[index % featureIcons.length];

  return (
    <article className="integration-card reveal-card">
      <div className="integration-top">
        <div className="icon-chain">
          {item.icons.map((icon, iconIndex) => (
            <span className="chain-part" key={`${item.title}-${icon}-${iconIndex}`}>
              <span className="mini-app">{icon}</span>
              {iconIndex < item.icons.length - 1 ? <span className="chain-separator">/</span> : null}
            </span>
          ))}
        </div>
        <span className={`pricing-badge ${item.status === "$ Paid" ? "is-paid" : ""}`}>{item.status}</span>
      </div>
      <div className="integration-icon-float">
        <FeatureIcon className="size-5" strokeWidth={2} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}

function Integrations() {
  return (
    <section className="integrations-section" id="integrations">
      <div className="content-container split-heading">
        <div>
          <p className="eyebrow">Integrations</p>
          <h2>Don't worry about custom features - they're all built in</h2>
        </div>
        <p className="section-side-copy">
          We use a native-centered approach to provide a seamless experience across workflows and
          templates.
        </p>
      </div>
      <div className="content-container integrations-grid">
        {integrations.map((item, index) => (
          <IntegrationCard item={item} index={index} key={item.title} />
        ))}
        <article className="integration-card roadmap-card">
          <h3>And we will bring you more!</h3>
          <p>Check our public roadmap to stay tuned about further updates and releases.</p>
          <button className="button button-outline" type="button">
            Check roadmap
            <ArrowRight className="size-5" strokeWidth={2} />
          </button>
        </article>
      </div>
    </section>
  );
}

function Voting() {
  const countdown = useCountdown();

  return (
    <section className="voting-section section-paper">
      <div className="content-container voting-heading">
        <p className="eyebrow centered">Community driven</p>
        <h2>Vote for the next features</h2>
        <p>Decide what workflows and templates you want more - we deliver it. Ends in:</p>
        <div className="countdown" aria-label="Countdown to July 1, 2026">
          <span>{countdown.days} days</span>
          <b>:</b>
          <span>{countdown.hours} hours</span>
          <b>:</b>
          <span>{countdown.minutes} minutes</span>
        </div>
      </div>

      <div className="content-container vote-card">
        <div className="vote-options">
          <article>
            <span className="feature-label automation">Automation</span>
            <div className="app-row compact" aria-hidden="true">
              <span className="app-icon notion-icon">N</span>
              <Plus className="size-4" />
              <span className="app-icon google-icon">G</span>
              <span>/</span>
              <span className="app-icon microsoft-icon">M</span>
            </div>
            <h3>Real-time analytics</h3>
            <p>Monitor your databases with complex charts, fully free and customizable.</p>
          </article>
          <article className="right">
            <span className="feature-label workflow">Workflow</span>
            <Rocket className="vote-rocket" strokeWidth={1.9} />
            <h3>Hiring dashboard</h3>
            <p>Manage all your hiring activities and meeting schedules in one place.</p>
          </article>
        </div>
        <div className="vote-actions">
          <button className="button button-primary" type="button">
            Vote
            <Plus className="size-5" strokeWidth={2} />
          </button>
          <div className="vote-bar" aria-label="Visual vote split">
            <span className="green" style={{ width: "57%" }}>
              <em>128 votes</em>
              <strong>57%</strong>
            </span>
            <span className="orange" style={{ width: "43%" }}>
              <strong>43%</strong>
              <em>128 votes</em>
            </span>
          </div>
          <button className="button button-primary" type="button">
            <Plus className="size-5" strokeWidth={2} />
            Vote
          </button>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-section" id="waitlist-final">
      <img className="final-bg" src={asset("/assets/final-bg.svg")} alt="" />
      <div className="final-content">
        <img className="final-mark" src={asset("/assets/span-final.svg")} alt="" />
        <h2>Join our waitlist</h2>
        <p>Release will be available soon. Don't miss a chance to try it first!</p>
        <EmailForm compact />
      </div>
      <footer className="footer">
        <img className="footer-logo" src={asset("/assets/logo-footer.svg")} alt="Autonomo" />
        <div className="socials" aria-label="Social links">
          <span>
            <img src={asset("/assets/telegram.svg")} alt="Telegram" />
          </span>
          <span>
            <img src={asset("/assets/instagram.svg")} alt="Instagram" />
          </span>
        </div>
        <p>
          Baked with <span aria-hidden="true">♥</span> by <strong>Tim</strong> & <strong>Steph</strong>
        </p>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <BestFits />
      <NotionEducation />
      <SolutionsGallery />
      <Integrations />
      <Voting />
      <FinalCta />
    </main>
  );
}
