import { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Mail,
  Quote,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  site,
  hero,
  metrics,
  capabilities,
  work,
  principles,
  testimonial,
  about,
} from "@/content"

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary font-serif text-sm text-primary-foreground">
            M
          </span>
          {site.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="rounded-full">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              Let’s talk
            </a>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-muted-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Reusable section label                                              */
/* ------------------------------------------------------------------ */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.682_0.197_37_/_0.14),transparent_62%)]"
      />
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {hero.headline.map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <>
                  I build <span className="text-primary">demand engines</span>
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <a href="#work">
              See the work <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-background/60"
          >
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>

      {/* Proof strip */}
      <div className="mx-auto mt-20 max-w-5xl">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <dt className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {m.value}
              </dt>
              <dd className="mt-2 text-sm font-medium text-foreground">
                {m.label}
              </dd>
              <dd className="text-xs text-muted-foreground">{m.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Capabilities                                                        */
/* ------------------------------------------------------------------ */
function Capabilities() {
  return (
    <section id="capabilities" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Eyebrow>What I do</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Marketing that ships, and shows up as pipeline.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {capabilities.map((c) => (
            <Card
              key={c.title}
              className="group border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex h-full flex-col p-7">
                <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="size-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */
function Work() {
  return (
    <section id="work" className="bg-secondary/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              A few things I’m proud of.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Each one a different problem — demand, scale, or story. Numbers
            shown are representative; ask me for the full breakdown.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {work.map((w, i) => (
            <Card
              key={w.title}
              className="group overflow-hidden border-border/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="grid gap-6 p-7 md:grid-cols-12 md:items-center md:gap-10 md:p-9">
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl text-muted-foreground/50">
                    0{i + 1}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <Badge
                    variant="secondary"
                    className="mb-3 rounded-full font-medium text-primary"
                  >
                    {w.tag}
                  </Badge>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between md:col-span-4 md:flex-col md:items-end md:justify-center md:text-right">
                  <p className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                    {w.metric}
                  </p>
                  <ArrowUpRight className="size-6 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Approach / principles                                               */
/* ------------------------------------------------------------------ */
function Approach() {
  return (
    <section id="approach" className="bg-ink px-6 py-24 text-ink-foreground md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary" />
            How I think
          </span>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Four things I believe about B2B marketing.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.n} className="flex gap-5">
              <span className="font-serif text-xl text-primary">{p.n}</span>
              <div>
                <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-14 bg-white/10" />

        {/* Testimonial */}
        <figure className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto size-7 text-primary" />
          <blockquote className="mt-5 font-serif text-2xl font-medium leading-snug md:text-3xl">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-5 text-sm text-ink-foreground/60">
            — {testimonial.attribution}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="mx-auto flex size-56 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent shadow-[0_0_0_6px_var(--background),0_24px_60px_-20px_oklch(0.682_0.197_37_/_0.5)] md:mx-0">
            <span className="font-serif text-7xl font-semibold text-primary">
              MK
            </span>
          </div>
          <div className="mt-7 space-y-1 text-center md:text-left">
            <p className="font-serif text-xl font-semibold">{site.name}</p>
            <p className="text-sm text-muted-foreground">
              {site.role} · {site.company}
            </p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Operator first. Strategist always.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="px-6 pb-28 pt-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center text-ink-foreground md:px-16 md:py-24">
        <Eyebrow>Let’s talk</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-tight md:text-5xl">
          Building a demand engine? Let’s make it scale.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-ink-foreground/70">
          Open to conversations about B2B SaaS marketing leadership, global
          go-to-market, and demand generation.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <a href={`mailto:${site.email}`}>
              <Mail className="size-4" /> Email me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Capabilities />
        <Work />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
