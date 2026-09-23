import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Bot, ChevronRight, Scissors, Table2, Menu, X } from "lucide-react";
import {
  siClaude,
  siClickup,
  siFigma,
  siGoogleads,
  siGoogleanalytics,
  siGooglegemini,
  siGoogletagmanager,
  siMeta,
  siYoutube,
  type SimpleIcon,
} from "simple-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { capabilities, certifications, portfolioLinks, projects } from "@/lib/portfolio-data";
import { Project, Certification } from "@/types/portfolio-data";
import heroPhoto from "../assets/keila-santos-hero.jpeg";
import { EditableLink } from "./EditableLink";

const navItems = [
  ["Sobre", "sobre"],
  ["Experiência", "experiencia"],
  ["Projetos", "projetos"],
  ["Processo", "processo"],
  ["Stack", "stack"],
  ["Contato", "contato"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", ...navItems.map((item) => item[1])];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-32% 0px -62%" },
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/82 shadow-[0_8px_28px_-26px_var(--foreground)] backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-[1160px] items-center justify-between px-5 lg:px-0">
        <a
          href="#inicio"
          className="font-display text-xs font-bold tracking-[0.12em] text-foreground"
        >
          KEILA SANTOS
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? "nav-link-active" : ""}`}
            >
              {label}
            </a>
          ))}
          <EditableLink href={portfolioLinks.resume} className="cursor-not-allowed opacity-55">
            <Button variant="portfolioOutline" size="sm">
              CURRÍCULO <ArrowUpRight />
            </Button>
          </EditableLink>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Navegação móvel"
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1160px] flex-col">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground"
              >
                {label}
              </a>
            ))}
            <EditableLink
              href={portfolioLinks.resume}
              className="mt-4 cursor-not-allowed opacity-55"
            >
              <Button variant="portfolioOutline" className="w-full">
                CURRÍCULO <ArrowUpRight />
              </Button>
            </EditableLink>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="reveal max-w-3xl">
      <p className="section-label flex items-center gap-3">
        <span className="h-px w-6 bg-accent/70" />
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}

function HeroPhoto() {
  return (
    <div className="hero-photo reveal relative mx-auto w-full max-w-[410px] lg:max-w-none">
      <div
        className="absolute -inset-3 translate-x-2 translate-y-2 border border-accent/15"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-border/80 bg-card shadow-[var(--shadow-deep)]">
        <img
          src={heroPhoto}
          alt="Retrato de Keila Santos"
          width={720}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_32%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_72%,var(--background)_118%)] opacity-35"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual group relative aspect-[4/3] overflow-hidden rounded-[3px] border border-border bg-card shadow-[var(--shadow-card)]">
      <img
        src={project.image}
        alt={`Imagem do projeto ${project.name}`}
        loading="lazy"
        width={1600}
        height={1000}
        className="h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-[1.018] group-hover:opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,var(--background)_100%)] opacity-75" />
      <span className="absolute bottom-4 left-4 border border-border bg-background/75 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.1em] text-muted-foreground backdrop-blur-sm">
        {project.name}
      </span>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const blocks = [
    ["OBJETIVO", project.objective],
    ["ESTRATÉGIA", project.strategy],
    ["PLATAFORMAS", project.platforms],
    ["MÉTRICAS ACOMPANHADAS", project.metrics.join(" · ")],
  ];
  return (
    <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto border-border bg-card p-0 shadow-[var(--shadow-deep)] sm:rounded-sm">
      <div className="border-b border-border p-6 sm:p-8">
        <p className="section-label">{project.segment}</p>
        <DialogHeader className="mt-4">
          <DialogTitle className="font-display text-2xl font-semibold leading-tight sm:text-4xl">
            {project.name}
          </DialogTitle>
          <DialogDescription className="mt-3 max-w-2xl text-sm leading-6">
            {project.description}
          </DialogDescription>
        </DialogHeader>
      </div>
      <div className="grid sm:grid-cols-2">
        {blocks.map(([label, value]) => (
          <div key={label} className="border-b border-border p-6 sm:border-r">
            <p className="section-label">{label}</p>
            <p className="mt-3 text-sm leading-6 text-foreground/85">{value}</p>
          </div>
        ))}
        <div className="p-6 sm:col-span-2">
          <p className="section-label">MINHA ATUAÇÃO</p>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/85 sm:grid-cols-2">
            {project.work.map((item) => (
              <li key={item} className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DialogContent>
  );
}

export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className="reveal grid items-center gap-8 border-t border-border py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:py-14">
      <div className={reverse ? "md:order-2" : ""}>
        <ProjectVisual project={project} />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="section-label">
          {project.segment} · {project.platforms}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6 grid gap-5 border-l border-border pl-5 sm:grid-cols-2">
          <div>
            <p className="section-label">OBJETIVO</p>
            <p className="mt-2 text-xs leading-6 text-foreground/80">{project.objective}</p>
          </div>
          <div>
            <p className="section-label">ESTRATÉGIA</p>
            <p className="mt-2 text-xs leading-6 text-foreground/80">{project.strategy}</p>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-7" variant="portfolioOutline" size="portfolio">
              VER MINHA ATUAÇÃO <ArrowUpRight />
            </Button>
          </DialogTrigger>
          <ProjectDetail project={project} />
        </Dialog>
      </div>
    </article>
  );
}

const process = [
  ["ENTENDER", "Objetivo, negócio e público."],
  ["ESTRUTURAR", "Campanhas, segmentações, palavras-chave e configurações."],
  ["MENSURAR", "Eventos, conversões e indicadores."],
  ["ANALISAR", "Comportamento da campanha e oportunidades."],
  ["OTIMIZAR", "Ajustes baseados no que os dados mostram."],
] as const;

const stackGroups = [
  {
    title: "MÍDIA PAGA",
    description: "Frente principal",
    tools: ["Google Ads", "Meta Ads", "YouTube Ads", "ChatGPT Ads"],
    level: "primary",
  },
  {
    title: "DADOS E MENSURAÇÃO",
    description: "Suporte estratégico",
    tools: ["Google Analytics 4", "Google Tag Manager", "Excel"],
    level: "secondary",
  },
  {
    title: "CRIAÇÃO E DESIGN",
    description: "Ferramentas complementares",
    tools: ["Figma", "Canva", "CapCut"],
    level: "complementary",
  },
  {
    title: "PLANEJAMENTO & GESTÃO",
    description: "Conhecimentos complementares",
    tools: ["ClickUp", "mLabs"],
    level: "complementary",
  },
  {
    title: "INTELIGÊNCIA ARTIFICIAL",
    description: "Ferramentas de apoio",
    tools: ["ChatGPT", "Claude", "Gemini"],
    level: "complementary",
  },
] as const;

const toolIcons: Partial<Record<(typeof stackGroups)[number]["tools"][number], SimpleIcon>> = {
  "Google Ads": siGoogleads,
  "Meta Ads": siMeta,
  "YouTube Ads": siYoutube,
  "Google Analytics 4": siGoogleanalytics,
  "Google Tag Manager": siGoogletagmanager,
  Figma: siFigma,
  ClickUp: siClickup,
  Claude: siClaude,
  Gemini: siGooglegemini,
};

const toolBrandClasses: Partial<Record<(typeof stackGroups)[number]["tools"][number], string>> = {
  "Google Ads": "brand-google-ads",
  "Meta Ads": "brand-meta",
  "YouTube Ads": "brand-youtube",
  "Google Analytics 4": "brand-google-analytics",
  "Google Tag Manager": "brand-google-tag-manager",
  Excel: "brand-excel",
  Figma: "brand-figma",
  Canva: "brand-canva",
  CapCut: "brand-capcut",
  ClickUp: "brand-clickup",
  mLabs: "brand-mlabs",
  ChatGPT: "brand-chatgpt",
  "ChatGPT Ads": "brand-chatgpt",
  Claude: "brand-claude",
  Gemini: "brand-gemini",
};

function BrandMark({ tool }: { tool: (typeof stackGroups)[number]["tools"][number] }) {
  const icon = toolIcons[tool];
  if (icon) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={icon.path} />
      </svg>
    );
  }
  if (tool === "Excel") return <Table2 aria-hidden="true" className="h-4 w-4" />;
  if (tool === "CapCut") return <Scissors aria-hidden="true" className="h-4 w-4" />;
  if (tool === "ChatGPT" || tool === "ChatGPT Ads")
    return <Bot aria-hidden="true" className="h-4 w-4" />;
  return (
    <span aria-hidden="true" className="font-display text-[10px] font-bold">
      {tool === "mLabs" ? "mL" : "C"}
    </span>
  );
}

function ToolCard({
  tool,
  emphasized,
}: {
  tool: (typeof stackGroups)[number]["tools"][number];
  emphasized: boolean;
}) {
  const brandClass = toolBrandClasses[tool] ?? "";
  return (
    <div
      className={`group/tool flex min-h-11 items-center gap-2.5 rounded-[3px] border px-3 py-2.5 text-xs transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-tool-hover)] ${emphasized ? "border-accent/25 bg-secondary/50 text-foreground shadow-[var(--shadow-tool)]" : "border-border/75 bg-background/35 text-foreground/85 shadow-[var(--shadow-tool)]"}`}
    >
      <span
        className={`brand-mark grid h-7 w-7 shrink-0 place-items-center rounded-[2px] border border-border/80 bg-card ${brandClass}`}
      >
        <BrandMark tool={tool} />
      </span>
      <span className="leading-4">{tool}</span>
    </div>
  );
}

export function CertificationCard({ certification }: { certification: Certification }) {
  const details = [certification.duration, certification.year].filter(Boolean).join(" · ");
  return (
    <article className="grid gap-1 border-t border-border py-3 sm:grid-cols-[0.25fr_1fr_auto] sm:items-center sm:gap-5">
      <span className="text-[11px] font-semibold text-accent-foreground">
        {certification.issuer}
      </span>
      <div className="min-w-0">
        <p className="text-sm leading-5 text-foreground/85">{certification.title}</p>
        {details && <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">{details}</p>}
      </div>
      {certification.href && (
        <a
          href={certification.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Ver certificado <ArrowUpRight className="h-3 w-3" />
        </a>
      )}
    </article>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.1em]">KEILA SANTOS</p>
          <p className="mt-1 text-[10px] text-muted-foreground">TRÁFEGO PAGO & PERFORMANCE</p>
        </div>
        <p className="text-[11px] text-muted-foreground">© 2026 Keila Santos</p>
      </div>
    </footer>
  );
}

export function PortfolioPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <section
          id="inicio"
          className="relative scroll-mt-16 px-5 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:px-0 lg:pb-28"
        >
          <div
            className="hero-grid absolute inset-y-0 right-0 w-1/2 opacity-20"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-[1160px] grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-[1.35fr_0.85fr] md:grid-rows-[1fr_auto] md:items-center">
            <div className="reveal md:col-start-1 md:row-start-1">
              <p className="section-label text-accent-foreground">TRÁFEGO PAGO & PERFORMANCE</p>
              <h1 className="mt-6 max-w-2xl font-display text-[2.45rem] font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.75rem]">
                Estratégista e Análise de dados
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Atuo na criação, acompanhamento e otimização de campanhas de mídia paga, conectando
                estratégia, dados e mensuração para tomar decisões mais assertivas.
              </p>
            </div>
            <div className="md:col-start-2 md:row-span-2 md:row-start-1">
              <HeroPhoto />
            </div>
            <div className="reveal md:col-start-1 md:row-start-2">
              <EditableLink
                href={portfolioLinks.resume}
                className="inline-flex cursor-not-allowed opacity-55"
              >
                <Button variant="portfolio" size="portfolio">
                  CURRÍCULO <ArrowUpRight />
                </Button>
              </EditableLink>
              <p className="mt-5 font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
                GOOGLE ADS · META ADS · CHATGPT ADS
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px max-w-[1160px] bg-border" />

        <section id="sobre" className="section-shell scroll-mt-16">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle eyebrow="SOBRE" title="Mídia paga, dados e aprendizado constante." />
            <div className="mt-10 grid gap-8 md:grid-cols-[0.45fr_1fr] md:gap-14">
              <div className="reveal hidden min-h-36 border-l border-border pl-5 md:block">
                <p className="section-label">FOCO</p>
                <p className="mt-4 text-sm leading-6 text-foreground/80">
                  Mídia paga
                  <br />
                  Performance
                  <br />
                  Dados &amp; mensuração
                </p>
              </div>
              <div className="reveal max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  Sou estudante de Marketing Digital e atuo com tráfego pago e performance,
                  trabalhando na criação e configuração de campanhas, análise de métricas,
                  acompanhamento de conversões e otimização de estratégias.
                </p>
                <p className="text-foreground/88">
                  No dia a dia, trabalho com Google Ads, Meta Ads e outras plataformas de mídia,
                  além de ferramentas de mensuração e análise. Meu foco é entender o contexto de
                  cada campanha, acompanhar seus dados e contribuir para decisões mais eficientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section-shell scroll-mt-16 bg-secondary/18">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="EXPERIÊNCIA"
              title="Estratégia, mídia e performance no dia a dia."
              intro="Atuação prática na criação, configuração, acompanhamento e otimização de campanhas para diferentes segmentos e objetivos."
            />
            <div className="mt-12 border-b border-border">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="reveal grid gap-5 border-t border-border py-7 md:grid-cols-[0.38fr_1fr] md:gap-12"
                >
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {item.items.map((value) => (
                      <li key={value} className="text-xs leading-6 text-muted-foreground">
                        {value}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section-shell scroll-mt-16">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="PROJETOS"
              title="Projetos que fazem parte da minha experiência em mídia paga."
              intro="Experiências em mídia paga para segmentos de saúde, indústria, engenharia, mercado imobiliário entre outros."
            />
            <div className="mt-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} reverse={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section-shell scroll-mt-16 bg-secondary/18">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="PROCESSO"
              title="Do dado à decisão."
              intro="Cada campanha começa com um objetivo e passa por acompanhamento contínuo para identificar o que funciona, o que precisa ser ajustado e onde existem novas oportunidades."
            />
            <div className="mt-12 border-b border-border md:grid md:grid-cols-5">
              {process.map(([title, text]) => (
                <article
                  key={title}
                  className="reveal border-t border-border py-6 md:min-h-44 md:border-l md:px-5 md:first:border-l-0"
                >
                  <span className="mb-8 block h-1.5 w-1.5 rounded-full bg-accent/75" />
                  <h3 className="text-xs font-semibold text-foreground">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section-shell scroll-mt-16">
          <div className="mx-auto max-w-[1160px]">
            <SectionTitle
              eyebrow="STACK"
              title="Stack de Performance"
              intro="Ferramentas que fazem parte da minha rotina para criar, acompanhar, mensurar e otimizar campanhas."
            />
            <div className="mt-12 border-b border-border">
              {stackGroups.map((group) => (
                <article
                  key={group.title}
                  className={`reveal grid gap-6 border-t px-0 py-7 transition-colors duration-300 md:grid-cols-[0.34fr_1fr] md:items-center md:px-5 ${group.level === "primary" ? "border-accent/30 bg-card/45" : group.level === "secondary" ? "border-border bg-secondary/12" : "border-border bg-background/20"}`}
                >
                  <div>
                    <h3 className="text-xs font-semibold text-foreground">{group.title}</h3>
                    <p className="mt-2 text-[10px] text-muted-foreground">{group.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.tools.map((tool) => (
                      <ToolCard key={tool} tool={tool} emphasized={group.level === "primary"} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-secondary/18">
          <div className="mx-auto grid max-w-[1160px] gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="reveal">
              <p className="section-label">FORMAÇÃO</p>
              <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">
                Marketing Digital
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">Uninter</p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.1em] text-accent-foreground">
                2025–2027
              </p>
            </div>
            <div className="reveal">
              <div className="flex items-end justify-between gap-4">
                <p className="section-label">CERTIFICAÇÕES</p>
                <EditableLink
                  href={portfolioLinks.certifications}
                  className="cursor-not-allowed opacity-55"
                >
                  <Button variant="portfolioOutline" size="sm">
                    VER CERTIFICAÇÕES <ArrowUpRight />
                  </Button>
                </EditableLink>
              </div>
              <div className="mt-5 sm:columns-2 sm:gap-8">
                {certifications.map((certification) => (
                  <div
                    key={`${certification.issuer}-${certification.title}`}
                    className="break-inside-avoid"
                  >
                    <CertificationCard certification={certification} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section-shell scroll-mt-16">
          <div className="reveal mx-auto max-w-[1160px] border-t border-border pt-12 sm:pt-16">
            <p className="section-label">CONTATO</p>
            <div className="mt-5 grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Vamos conversar?
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Estou aberta a novas oportunidades e projetos relacionados a tráfego pago,
                  performance e marketing digital.
                </p>
              </div>
              <div className="flex flex-col border-t border-border md:border-t-0">
                {(
                  [
                    ["LinkedIn", portfolioLinks.linkedin],
                    ["WhatsApp", portfolioLinks.whatsapp],
                    ["E-mail", portfolioLinks.email],
                  ] as const
                ).map(([label, href]) => (
                  <EditableLink
                    key={label}
                    href={href}
                    className="flex items-center justify-between border-b border-border py-3 text-sm font-medium text-foreground transition-colors hover:text-accent-foreground"
                  >
                    {label}
                    <ArrowUpRight className="h-4 w-4" />
                  </EditableLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
