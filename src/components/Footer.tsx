export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p role="nameFooter" className="font-display text-sm font-bold tracking-[0.1em]">
            KEILA SANTOS
          </p>
          <p role="description" className="mt-1 text-[10px] text-muted-foreground">
            TRÁFEGO PAGO & PERFORMANCE
          </p>
        </div>
        <p role="Copyright" className="text-[11px] text-muted-foreground">
          © 2026 Keila Santos
        </p>
      </div>
    </footer>
  );
}
