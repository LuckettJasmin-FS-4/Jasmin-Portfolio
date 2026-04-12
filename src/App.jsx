export default function JasminPortfolio() {
  const projects = [
    {
      title: "Pawstagram",
      tech: "React, Styled Components, JavaScript",
      description:
        "An Instagram-style social app with reusable components and features for creating, editing, and deleting posts.",
      github: "https://github.com/LuckettJasmin-FS-4/luckett-jasmin-dev2501a",
    },
    {
      title: "Ready Set Travel",
      tech: "HTML, CSS, JavaScript",
      description:
        "A responsive multi-page travel website with destination pages, booking flow, and accessible layout design.",
      github: "https://github.com/ePortfolios/wdv119-LuckettJasmin-FS-2",
    },
    {
      title: "Hoppitz Destinations",
      tech: "React, Vite, JavaScript",
      description:
        "A modern travel web app focused on clean UI structure, responsive design, and scalable components.",
      github: "https://github.com/LuckettJasmin-FS-4/hoppitz-destinations",
    },
  ]; 
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "JSX/TSX",
    "Responsive Design",
    "Accessibility",
    "Git & GitHub",
    "REST APIs",
    "MySQL / SQL",
    "QA Testing",
    "Debugging",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Jasmin J. Luckett</h1>
            <p className="text-lg text-slate-600">Web Developer • Front-End • QA-Oriented</p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-medium">
            <a href="#about" className="rounded-full px-4 py-2 hover:bg-slate-100">About</a>
            <a href="#projects" className="rounded-full px-4 py-2 hover:bg-slate-100">Projects</a>
            <a href="#skills" className="rounded-full px-4 py-2 hover:bg-slate-100">Skills</a>
            <a href="#contact" className="rounded-full px-4 py-2 hover:bg-slate-100">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-block rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold">
              Open to remote web developer and QA roles
            </p>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Building clean, user-friendly web experiences.
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                I’m an aspiring full stack developer with experience in web development,
                technical support, and quality assurance. I enjoy creating responsive,
                accessible interfaces and solving technical problems with care and precision.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 shadow-sm transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-8 shadow-sm border">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Focus</p>
              <h3 className="mt-3 text-2xl font-semibold">Front-end development with a QA mindset</h3>
              <p className="mt-3 text-slate-600">
                I combine design awareness, debugging skills, and user-focused thinking to build
                practical web projects with React, JavaScript, and responsive design.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm border">
                <p className="text-3xl font-bold">3+</p>
                <p className="mt-2 text-slate-600">Portfolio-ready development projects</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm border">
                <p className="text-3xl font-bold">QA + Support</p>
                <p className="mt-2 text-slate-600">Transferable real-world troubleshooting experience</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 max-w-4xl text-slate-600 leading-7">
              I’m currently studying web development and building projects that strengthen my skills
              in React, JavaScript, APIs, and responsive design. My background in technical support,
              mobile repair, and quality assurance has taught me how to troubleshoot efficiently,
              communicate clearly, and keep the user experience at the center of every solution.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">{project.tech}</p>
                <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
                <div className="mt-6">
  <a
    href={project.github}
    target="_blank"
    className="rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm"
  >
    View Code
  </a>
</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm border">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Tech Stack</p>
            <h2 className="mt-2 text-3xl font-bold">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold">Let’s Connect</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-7">
              I’m looking for opportunities in web development, front-end development, and QA.
              Reach out to talk about projects, internships, or remote roles.
            </p>
            <div className="mt-6 space-y-2 text-lg">
  <p>Email: luckettjasmin@gmail.com</p>
  <p>Phone: (318) 730-3200</p>

  <p>
    GitHub: 
    <a 
      href="https://github.com/LuckettJasmin-FS-4" 
      target="_blank"
      className="underline ml-1"
    >
      https://github.com/LuckettJasmin-FS-4
    </a>
  </p>

  <p>
    Portfolio: 
    <a 
      href="https://jasmin-portfolio-iota.vercel.app" 
      target="_blank"
      className="underline ml-1"
    >
      https://jasmin-portfolio-iota.vercel.app
    </a>
  </p>
</div>
          </div>
        </section>
      </main>
    </div>
  );
}
