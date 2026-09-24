import { useEffect, useState, type ReactNode } from "react";
import { EditableLink } from "./EditableLink";
import { portfolioLinks } from "@/lib/portfolio-data";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
