import { nav, site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-ink text-mist/60">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="font-display text-base font-semibold text-mist">{site.name}</p>
          <p className="mt-1 font-mono text-xs">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-mist">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
