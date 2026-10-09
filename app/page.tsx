const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Understand the patterns behind worry, panic, and constant tension. Build practical tools to feel more grounded and present.",
  },
  {
    number: "02",
    title: "Trauma & Healing",
    description:
      "Explore the impact of past experiences at a pace that feels safe, with care for emotional well-being and nervous system regulation.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Make space beyond achievement and pressure. Develop healthier boundaries, reconnect with yourself, and find a more sustainable rhythm.",
  },
];

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "I work with adults experiencing anxiety, panic, trauma, stress, professional burnout, perfectionism, and the effects of difficult past experiences.",
  },
  {
    question: "What approaches do you use?",
    answer:
      "My approach integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to your needs.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Yes. I offer in-person therapy at my Santa Monica office and secure telehealth sessions for clients located in California.",
  },
  {
    question: "What can I expect from therapy?",
    answer:
      "Sessions are warm and collaborative, with structure when helpful and room for deeper reflection. We work together at a pace that respects your needs.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#faf8f4] text-[#293b32]">
      <div className="bg-[#293b32] px-4 py-2 text-center text-xs tracking-wide text-white sm:text-sm">
        In-person therapy in Santa Monica · Secure telehealth across California
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight sm:text-xl">
          Maya Reynolds, PsyD
          <span className="mt-1 block text-[10px] font-normal uppercase tracking-[0.24em] text-[#8a755d]">
            Clinical Psychology
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#about" className="hover:text-[#a36e4d]">About</a>
          <a href="#services" className="hover:text-[#a36e4d]">How I Help</a>
          <a href="#office" className="hover:text-[#a36e4d]">The Office</a>
          <a href="#faq" className="hover:text-[#a36e4d]">FAQs</a>
          <a href="#contact" className="rounded-full bg-[#293b32] px-5 py-3 text-white hover:bg-[#40594a]">
            Get in Touch
          </a>
        </nav>
        <a href="#contact" className="rounded-full bg-[#293b32] px-4 py-2.5 text-sm text-white md:hidden">
          Contact
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 md:grid-cols-2 md:pb-28 md:pt-16">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
            A thoughtful space for healing
          </p>
          <h1 className="text-4xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            You don’t have to hold it all together{" "}
            <span className="font-serif italic text-[#a36e4d]">
              on your own.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#626a61] sm:text-lg">
            Therapy for anxiety, trauma, and burnout. Find space to slow down,
            understand yourself, and move toward a more grounded life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="rounded-full bg-[#293b32] px-7 py-4 text-sm text-white transition hover:bg-[#40594a]">
              Explore Working Together <span aria-hidden="true">↗</span>
            </a>
            <a href="#about" className="text-sm underline underline-offset-4">
              Meet Dr. Maya
            </a>
          </div>
          <p className="mt-8 text-sm text-[#73786f]">
            Licensed Clinical Psychologist · Santa Monica, California
          </p>
        </div>
        <div className="relative">
          <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-t-full bg-[#e9e1d5]" />
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85"
            alt="Warm, natural-light interior with comfortable seating"
            className="relative h-[390px] w-full rounded-t-[48%] object-cover sm:h-[510px]"
          />
          <div className="absolute bottom-5 right-4 max-w-[220px] rounded-2xl bg-[#faf8f4] p-4 shadow-lg sm:bottom-8 sm:right-[-12px]">
            <p className="font-serif text-lg italic">A place to exhale.</p>
            <p className="mt-1 text-xs leading-5 text-[#73786f]">
              Care that meets you with warmth, respect, and understanding.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eee9df] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl">Anxiety & Panic</p>
            <p className="mt-2 text-sm text-[#626a61]">Less overwhelm, more steadiness</p>
          </div>
          <div>
            <p className="font-serif text-xl">Trauma-Informed Care</p>
            <p className="mt-2 text-sm text-[#626a61]">Safety, stabilization, and healing</p>
          </div>
          <div>
            <p className="font-serif text-xl">Burnout & Perfectionism</p>
            <p className="mt-2 text-sm text-[#626a61]">A more sustainable way forward</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
            How I can help
          </p>
          <h2 className="mt-4 text-3xl font-normal sm:text-5xl">
            Support for what you’re carrying.
          </h2>
          <p className="mt-5 leading-7 text-[#626a61]">
            You may look capable on the outside while feeling exhausted within.
            Therapy offers space to understand what is happening and find a way
            forward that feels right for you.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="rounded-2xl border border-[#e5dfd4] bg-white/60 p-7 sm:p-9">
              <span className="text-sm text-[#a36e4d]">{service.number}</span>
              <h3 className="mt-8 font-serif text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#626a61]">
                {service.description}
              </p>
              <a href="#contact" className="mt-7 inline-block text-sm underline underline-offset-4">
                Learn about working together →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#e8e9df] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-t-[48%]">
            <img
              src="/maya-headshot.png"
              alt="Dr. Maya Reynolds, PsyD"
              className="h-[400px] w-full object-cover sm:h-[520px]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
              A little about me
            </p>
            <h2 className="mt-4 text-3xl font-normal leading-tight sm:text-5xl">
              Therapy that makes room for the whole of you.
            </h2>
            <p className="mt-6 leading-8 text-[#626a61]">
              I’m Dr. Maya Reynolds, a licensed clinical psychologist in Santa
              Monica, California. I work with adults who are navigating anxiety,
              panic, trauma, and professional burnout—even when life looks
              perfectly manageable from the outside.
            </p>
            <p className="mt-4 leading-8 text-[#626a61]">
              My approach is warm, collaborative, and grounded in evidence-based
              care. Together, we can explore patterns, build practical skills,
              and work toward a deeper understanding of your experiences.
            </p>
            <p className="mt-4 leading-8 text-[#626a61]">
              I believe therapy should offer both useful tools and space for
              meaningful reflection, with safety and your pace at the center.
            </p>
            <a href="#contact" className="mt-7 inline-block rounded-full bg-[#293b32] px-6 py-3.5 text-sm text-white hover:bg-[#40594a]">
              Let’s Connect →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
              My approach
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Practical tools. Deeper understanding.
            </h2>
            <p className="mt-5 leading-8 text-[#626a61]">
              Therapy is not one-size-fits-all. Our work is shaped around your
              experiences, needs, and goals, combining structure with room to
              reflect and discover.
            </p>
          </div>
          <div className="space-y-0">
            {[
              ["Cognitive-Behavioral Therapy (CBT)", "Explore the connection between thoughts, emotions, and behaviors."],
              ["EMDR", "A trauma-focused approach used as appropriate to your needs and readiness."],
              ["Mindfulness-Based Practices", "Build awareness of the present moment with less judgment."],
              ["Body-Oriented Techniques", "Pay attention to the body's responses as part of emotional well-being."],
            ].map(([title, description]) => (
              <div key={title} className="border-b border-[#ded8cd] py-5">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#626a61]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="office" className="bg-[#293b32] px-5 py-20 text-white sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9b899]">
              Your space to feel at ease
            </p>
            <h2 className="mt-4 text-3xl sm:text-5xl">A calm place to begin.</h2>
            <p className="mt-5 leading-8 text-white/75">
              My Santa Monica office is designed to feel quiet, private, and
              grounding, with natural light and a comfortable, uncluttered
              environment. You deserve a space where you can arrive as you are.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <img
              src="/office1.jpeg"
              alt="Therapy office interior"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
            <img
              src="/office2.jpeg"
              alt="Comfortable and welcoming office space"
              className="h-72 w-full rounded-2xl object-cover sm:h-96"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="font-medium">123th Street 45 W, Santa Monica, CA 90401</p>
            <p className="mt-2 text-sm text-white/70">
              In-person appointments · Secure telehealth throughout California
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
            Good to know
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Frequently asked questions</h2>
        </div>
        <div className="mt-10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#ded8cd] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {faq.question}
                <span className="text-xl text-[#a36e4d] group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 pr-5 text-sm leading-7 text-[#626a61]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#eee9df] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a36e4d]">
            Take the first step
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight sm:text-5xl">
            You don’t have to figure everything out today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#626a61]">
            If you’re looking for thoughtful, grounded support for anxiety,
            trauma, or burnout, therapy may be a place to begin.
          </p>
          <a
            href="mailto:hello@example.com?subject=Therapy%20Inquiry"
            className="mt-8 inline-block rounded-full bg-[#293b32] px-7 py-4 text-sm text-white hover:bg-[#40594a]"
          >
            Reach Out to Dr. Maya
          </a>
          <p className="mt-5 text-xs text-[#73786f]">
            Replace the example email with the real contact details before launch.
          </p>
        </div>
      </section>

      <footer className="bg-[#293b32] px-5 py-8 text-center text-sm text-white/75">
        <p className="font-medium text-white">Dr. Maya Reynolds, PsyD</p>
        <p className="mt-2">Licensed Clinical Psychologist · Santa Monica, California</p>
        <p className="mt-4 text-xs">This is a fictional therapist profile created for a design assignment.</p>
      </footer>
    </main>
  );
}
