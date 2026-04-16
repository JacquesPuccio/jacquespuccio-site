export default function PersonalSite() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Business operations • SaaS • DevOps path • Revenue systems
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                I build <span className="text-red-400">systems</span> that turn
                ideas, operations, and execution into real business growth.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                I’m Albert Jacques — working across SaaS, lead generation,
                property services, and scalable workflows. I connect business,
                technology, and execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/albertjacques1/"
                  target="_blank"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  LinkedIn
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl bg-red-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400"
                >
                  Work with me
                </a>
                <a
                  href="#projects"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5"
                >
                  View projects
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    Operations & Growth
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                    Current
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    Roofing, SaaS, Automation
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                    Positioning
                  </p>
                  <p className="mt-3 text-lg font-medium leading-7 text-white/85">
                    Operator mindset. Technical curiosity. Revenue-first
                    execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8" id="about">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A business operator with a systems mindset.
            </h2>
          </div>
          <div className="space-y-6 text-white/75 leading-8">
            <p>
              My background comes from SaaS, hospitality tech, customer
              operations, and technical troubleshooting. I’ve worked closely
              with integrations, channel managers, customer-facing systems, and
              revenue-impacting workflows.
            </p>
            <p>
              Today, I’m applying that same thinking to service businesses:
              building lead generation systems, improving execution, and helping
              companies grow with more structure and less chaos.
            </p>
            <p>
              I’m also continuing my technical path in automation,
              infrastructure, and Kubernetes-driven DevOps.
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-white/[0.03]"
        id="services"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                What I do
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Built for edge, clarity, and execution.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Business Operations",
                text: "I help structure workflows, define priorities, and remove friction across teams and processes.",
              },
              {
                title: "Lead Generation Systems",
                text: "From outreach tracking to pipeline management, I build systems focused on actual conversion.",
              },
              {
                title: "Technical Problem Solving",
                text: "I bridge customers, product, and systems to resolve issues that affect growth and execution.",
              },
              {
                title: "Automation & DevOps Path",
                text: "I’m building toward scalable infrastructure, automation, and Kubernetes-based workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-red-400/40"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8" id="projects">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Current projects and business focus.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Icon Roofing Group",
              text: "Lead generation, SEO, operations, and systems for roofing growth in the Orlando market.",
            },
            {
              title: "Caruci Group",
              text: "A multi-industry vehicle for consulting, systems, lead generation, and scalable business execution.",
            },
            {
              title: "Sea of Dreams",
              text: "A longer-term concept combining lifestyle, stays, experiences, and digital products.",
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-[28px] border border-white/10 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/10"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                {project.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8" id="contact">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                If you’re building something serious, let’s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-white/70 leading-8">
                I work best where business needs execution, systems, and
                technical thinking.
              </p>
              <a
                href="https://wa.me/34600024195"
                target="_blank"
                className="inline-flex mt-6 rounded-2xl bg-green-500 px-5 py-3 text-sm font-medium text-white hover:bg-green-400"
              >
                WhatsApp
              </a>
            </div>
            <div className="space-y-4 rounded-[24px] border border-white/10 bg-black/20 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Email
                </p>
                <p className="mt-2 text-lg">jacquespuccio@gmail.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Based in
                </p>
                <p className="mt-2 text-lg">Barcelona / Spain</p>
              </div>
              <a
                href="mailto:jacquespuccio@gmail.com"
                className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Send email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
