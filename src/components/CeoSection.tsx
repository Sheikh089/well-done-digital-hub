import pdgImg from "@/assets/pdg-cheikh-mbacke-kharma.png";
import { Quote, Linkedin, Globe } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function CeoSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-24">
      {/* Decorative dots */}
      <div className="dot-pattern absolute left-0 top-10 h-24 w-32 opacity-60" aria-hidden />
      <div className="dot-pattern absolute bottom-10 right-0 h-24 w-32 opacity-60" aria-hidden />
      {/* Floating gradient blob */}
      <div
        className="animate-blob pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-accent)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center reveal" data-reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal">Mot du Président</p>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Le mot de l'<span className="text-gradient">Administrateur Général</span>
          </h2>
        </div>

        <div className="relative grid items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10 lg:grid-cols-12 lg:gap-14">
          {/* Vertical accent bar */}
          <div
            className="absolute left-0 top-1/2 hidden h-1/2 w-1.5 -translate-y-1/2 rounded-r-full lg:block"
            style={{ background: "var(--gradient-accent)" }}
            aria-hidden
          />

          {/* Quote */}
          <div className="reveal-left lg:col-span-7" data-reveal>
            <Quote className="text-teal" size={42} />
            <blockquote className="mt-5 font-heading text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              « Passionné par l'innovation technologique, je m'engage pleinement dans la
              transformation digitale des entreprises. Avec une solide compréhension des
              enjeux numériques et des processus métiers, je mets mes compétences au
              service de solutions <span className="text-gradient font-semibold">durables, agiles et orientées résultats</span>.
              Ma vision : faire du digital un levier de performance et de croissance pour
              chaque organisation. Résolument tourné vers l'avenir, je crois en l'alliance
              entre technologie, stratégie et intelligence collective pour bâtir un monde
              plus connecté, efficace et humain. »
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div>
                <div className="font-heading text-lg font-bold">M. Cheikh Mbacké KHARMA</div>
                <div className="text-sm font-semibold uppercase tracking-wider shimmer-text">
                  Administrateur Général · PDG
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <a
                  href="https://www.welldonescompany.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:border-teal/50 hover:text-foreground"
                >
                  <Globe size={14} /> welldonescompany.com
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full bg-accent-gradient text-deep transition-transform hover:-translate-y-0.5"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="reveal-right relative lg:col-span-5" data-reveal>
            <div
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              style={{ background: "var(--gradient-accent)" }}
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={pdgImg}
                alt="M. Cheikh Mbacké KHARMA, Administrateur Général de Well Done Services Company"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-deep-foreground">
                <span className="rounded-full bg-deep-foreground/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                  PDG
                </span>
                <span className="animate-pulse-glow grid h-3 w-3 place-items-center rounded-full bg-mint" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
