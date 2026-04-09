import { profile } from "@/data/profile";
import { navItems } from "@/lib/nav";
import SectionPreviewCard from "@/components/SectionPreviewCard";

export default function Home() {
  return (
    <div className="py-24">
      {/* Profile */}
      <section className="mb-20">
        <h1 className="text-4xl font-medium tracking-tight text-foreground mb-4">
          {profile.name}
        </h1>
        <p className="text-lg text-muted mb-6">{profile.tagline}</p>
        <p className="text-base leading-relaxed text-foreground max-w-prose mb-8">
          {profile.bio}
        </p>

        {/* Contact links */}
        <div className="flex flex-wrap gap-6 text-sm">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="text-muted hover:text-foreground transition-colors"
            >
              {profile.email}
            </a>
          )}
          {profile.snsLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Section previews */}
      <section>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {navItems.map((item) => (
            <SectionPreviewCard key={item.href} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
