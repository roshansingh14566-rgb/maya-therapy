const services = [
  {
    number: "01",
    title: "Individual Therapy",
    description:
      "A supportive space to explore your thoughts, understand your emotions, and work toward meaningful change.",
  },
  {
    number: "02",
    title: "Anxiety Support",
    description:
      "Build a better understanding of anxiety and discover practical ways to navigate life's challenges.",
  },
  {
    number: "03",
    title: "Personal Growth",
    description:
      "Explore your needs, strengthen self-awareness, and move toward a life that feels more aligned with you.",
  },
];

const imageStyle = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85')",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#263d35]">
      {/* Navigation */}
      <header className="border-b border-[#263d35]/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Maya Reynolds<span className="text-[#b47b5b]">.</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-[#69776c]">
              Therapy & Wellbeing
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="hover:text-[#b47b5b]">About</a>
            <a href="#services" className="hover:text-[#b47b5b]">Services</a>
            <a href="#office" className="hover:text-[#b47b5b]">Our Office</a>
            <a href="#faq" className="hover:text-[#b47b5b]">FAQs</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#344e41] px-5 py-3 text-sm text-white transition hover:bg-[#24392f]"
          >
            Get in Touch ↗
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#a66e50]">
            A space to feel understood
          </p>

          <h1 className="max-w-xl text-5xl font-medium leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
            You deserve a life that feels more like <span className="font-serif italic text-[#a66e50]">you.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#68766c] md:text-lg">
            Therapy offers a space to slow down, explore what matters, and
            find a more meaningful way forward. You don't have to figure
            everything out on your own.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#344e41] px-7 py-4 text-sm text-white transition hover:bg-[#24392f]"
            >
              Start a Conversation ↗
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#344e41]/30 px-7 py-4 text-sm transition hover:bg-white"
            >
              Meet Your Therapist
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-[#263d35]/15 pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7dfd1] font-serif text-xl">
              M
            </div>
            <div>
              <p className="font-medium">Dr. Maya Reynolds</p>
              <p className="mt-1 text-sm text-[#68766c]">
                A thoughtful approach to wellbeing
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            role="img"
            aria-label="A peaceful, naturally lit interior"
            className="min-h-[420px] rounded-t-[48%] rounded-b-[12px] bg-cover bg-center md:min-h-[590px]"
            style={imageStyle}
          />
          <div className="absolute bottom-6 left-0 max-w-[245px] rounded-2xl bg-[#f7f5ef] p-5 shadow-lg md:-left-8">
            <span className="text-2xl text-[#a66e50]">✳</span>
            <p className="mt-2 font-serif text-xl">Space to pause.</p>
            <p className="mt-1 text-sm leading-6 text-[#68766c]">
              Time to reflect, reconnect, and grow at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="about" className="bg-[#e9e8dd] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a66e50]">
              A little about me
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              Your story deserves to be heard.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#536458]">
              Taking the first step toward therapy can feel unfamiliar.
              My goal is to create a welcoming space where you can talk
              openly, feel heard, and explore the experiences that shape
              your life.
            </p>
            <p className="mt-5 leading-8 text-[#536458]">
              Together, we can work toward greater self-understanding,
              explore new perspectives, and identify steps that feel right
              for you.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex border-b border-[#344e41] pb-2 text-sm font-medium"
            >
              Let's connect ↗
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a66e50]">
            How I can help
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Support that starts with you.
          </h2>
          <p className="mt-5 leading-7 text-[#68766c]">
            Everyone's journey is different. Our work begins with
            understanding your needs and what you hope to change.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-[#344e41]/15 bg-white/60 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm text-[#a66e50]">{service.number}</span>
              <h3 className="mt-7 font-serif text-2xl">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#68766c]">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-7 inline-block text-sm font-medium"
              >
                Learn more ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Our Office - New custom section */}
      <section id="office" className="bg-[#344e41] px-6 py-20 text-[#f7f5ef] md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div
            role="img"
            aria-label="A calm and inviting interior space"
            className="min-h-[350px] rounded-2xl bg-cover bg-center md:min-h-[480px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85')",
            }}
          />
          <div className="md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e0b797]">
              Our Office
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
              A calmer place to begin.
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              The environment around us can help us slow down and feel
              more at ease. This space is designed to feel warm, welcoming,
              and comfortable—a place where you can focus on yourself
              without unnecessary distractions.
            </p>
            <p className="mt-5 leading-8 text-white/75">
              Whether you're taking your first step or continuing your
              journey, you deserve to feel respected and supported.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-[#f7f5ef] px-7 py-4 text-sm font-medium text-[#344e41] transition hover:bg-white"
            >
              Ask About Sessions ↗
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a66e50]">
            Frequently asked questions
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Before we begin.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-[#263d35]/15">
          <details className="group py-6" open>
            <summary className="cursor-pointer list-none font-medium">
              What can I expect from a first session?
              <span className="float-right text-[#a66e50]">+</span>
            </summary>
            <p className="mt-4 max-w-2xl leading-7 text-[#68766c]">
              A first conversation is an opportunity to discuss what brings
              you to therapy, ask questions, and explore whether working
              together feels like a good fit.
            </p>
          </details>

          <details className="group py-6">
            <summary className="cursor-pointer list-none font-medium">
              Is therapy a space where I can speak openly?
              <span className="float-right text-[#a66e50]">+</span>
            </summary>
            <p className="mt-4 leading-7 text-[#68766c]">
              Therapy is intended to offer a respectful, supportive
              environment. Your therapist can explain confidentiality
              and its limits before you begin.
            </p>
          </details>

          <details className="group py-6">
            <summary className="cursor-pointer list-none font-medium">
              How do I find out whether we're a good fit?
              <span className="float-right text-[#a66e50]">+</span>
            </summary>
            <p className="mt-4 leading-7 text-[#68766c]">
              You can start by discussing your needs, goals, and questions.
              It's important to feel comfortable with your therapist's
              approach and experience.
            </p>
          </details>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#e9e8dd] px-7 py-14 text-center md:px-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a66e50]">
            Your next chapter
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            You don't have to navigate everything alone.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#68766c]">
            Taking the first step can be simple. Reach out to learn more
            about therapy and the next steps.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-block rounded-full bg-[#344e41] px-8 py-4 text-sm text-white transition hover:bg-[#24392f]"
          >
            Get in Touch ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#263d35]/15 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#68766c] md:flex-row">
          <p>© 2026 Maya Reynolds Therapy</p>
          <p>A thoughtful space for wellbeing and personal growth.</p>
        </div>
      </footer>
    </main>
  );
}

