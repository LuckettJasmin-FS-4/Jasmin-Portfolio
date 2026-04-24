import hoppitzImg from "./assets/hoppitz.png";
import lineChartImg from "./assets/lineChart.png";
import honeyChartImg from "./assets/honeyChart.png";
import playgroundImg from "./assets/playground.png";
import woofbookImg from "./assets/woofbook.png";
import chart2Img from "./assets/chart2.png";
import dashboardImg from "./assets/dashboard.png";
export default function JasminPortfolio() {
  const projects = [
    {
      title: "Honey Production Analysis",
      tech: "SQL, Python, Pandas, Flourish",
      description:
        "Analyzed U.S. honey production trends using SQL and Python to identify long-term decline, top-producing states, and changes over time. Created interactive Flourish visualizations to highlight production trends and state comparisons.",
      github:
        "https://github.com/LuckettJasmin-FS-4/honey-production-analysis",
      demo:
        "https://www.kaggle.com/code/jasminluckett/decline-in-u-s-honey-production-a-sql-and-data-a",
      charts: [
        {
          label: "Line Chart",
          url: "https://public.flourish.studio/visualisation/28571157/",
          style:
            "rounded-2xl border border-amber-500 px-4 py-2 text-sm text-amber-600 transition hover:bg-amber-50",
        },
        {
          label: "Bar Chart",
          url: "https://public.flourish.studio/visualisation/28573476/",
          style:
            "rounded-2xl border border-yellow-500 px-4 py-2 text-sm text-yellow-700 transition hover:bg-yellow-50",
        },
      ],
      image: honeyChartImg,
      featured: true,
    },
    {
      title: "Nike vs Puma Sales Dashboard",
      tech: "Python, SQL, Tableau",
      description: "Interactive Tableau dashboard analyzing Nike and Puma retail sales performance, including top products, lowest performers, and category distribution.",
      image: dashboardImg,
      github: "https://github.com/LuckettJasmin-FS-4/Nike-vs.-Puma-Retail-Sales-Analysis-Python-SQL-Power-BI-/blob/main/ReadME.md",
      demo: "https://public.tableau.com/views/NikevsPumaSales/Dashboard1"
    },
    {
      title: "Macaw Population SQL Analysis",
      tech: "SQL, MySQL, Google Sheets",
      description:
        "Built a relational SQL database to analyze macaw population decline by combining species, habitat, and trade data. Used JOIN queries to uncover conservation insights and created visualizations to highlight habitat loss, conservation status, and trade activity.",
      github: "https://github.com/LuckettJasmin-FS-4/macaw-sql-analysis",
      demo: "https://docs.google.com/spreadsheets/d/1hnht0FmDQ2PeqxV3MG63IiCqfqs-XBkn96ZVs-DHJUU/edit?usp=sharing",
      charts: [],
      image: chart2Img,
      featured: true,
    },
    {
      title: "Gas Price SQL Analysis",
      tech: "SQL, Python, Pandas, Flourish",
      description:
        "Analyzed U.S. gas price trends using SQL to identify long-term patterns, seasonal changes, and major price spikes. Created interactive Flourish visualizations to compare fuel prices and show changes over time.",
      github: "https://github.com/LuckettJasmin-FS-4/gas-price-sql-analysis",
      demo:
        "https://www.kaggle.com/code/jasminluckett/rise-of-gas-prices-in-the-u-s-a-sql-analysis",
      charts: [
        {
          label: "Line Chart",
          url: "https://public.flourish.studio/visualisation/28566700/",
          style:
            "rounded-2xl border border-blue-500 px-4 py-2 text-sm text-blue-600 transition hover:bg-blue-50",
        },
        {
          label: "Pie Chart",
          url: "https://public.flourish.studio/visualisation/28567731/",
          style:
            "rounded-2xl border border-emerald-500 px-4 py-2 text-sm text-emerald-600 transition hover:bg-emerald-50",
        },
      ],
      image: lineChartImg,
      featured: true,
    },
    {
      title: "Bright Minds Learning Playground",
      tech: "React, JavaScript, Vite",
      description:
        "Interactive educational web app for children ages 4–12 featuring reading, math, and color recognition games with sound effects and visual feedback.",
      github:
        "https://github.com/LuckettJasmin-FS-4/Bright-Minds-Learning-playground",
      demo: "https://bright-minds-learning-playground.vercel.app",
      charts: [],
      image: playgroundImg,
      featured: true,
    },
    {
      title: "WoofBook",
      tech: "React, Styled Components, JavaScript",
      description:
        "A Facebook-style social app where users can create, edit, and delete posts using reusable React components.",
      github:
        "https://github.com/LuckettJasmin-FS-4/luckett-jasmin-dev2501",
      demo: "https://luckett-jasmin-dev2501.vercel.app",
      charts: [],
      image: woofbookImg,
      featured: true,
    },
    {
      title: "Hoppitz Destinations",
      tech: "React, JavaScript, CSS",
      description:
        "A travel website featuring destinations, tours, and booking pages with a clean responsive layout.",
      github: "https://github.com/LuckettJasmin-FS-4/YOUR-HOPPITZ-REPO",
      demo: "https://hoppitz-destinations.vercel.app",
      charts: [],
      image: hoppitzImg,
      featured: false,
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Responsive Design",
    "Accessibility",
    "Git & GitHub",
    "SQL",
    "Python",
    "Pandas",
    "QA Testing",
    "Debugging",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Jasmin J. Luckett
            </h1>
            <p className="text-lg text-slate-600">
              Web Developer • Front-End • QA-Oriented
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm font-medium">
            <a
              href="#about"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              About
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 transition hover:bg-slate-100"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <p className="inline-block rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                Open to remote web developer and QA roles
              </p>

              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight md:text-6xl">
                  Building clean, user-friendly web experiences.
                </h2>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  I’m an aspiring full stack developer with experience in web
                  development, technical support, and quality assurance. I enjoy
                  creating responsive, accessible interfaces and solving
                  technical problems with care and precision.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Focus
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  Front-end development with a QA mindset
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  I combine design awareness, debugging skills, and
                  user-focused thinking to build practical web projects with
                  React, JavaScript, SQL, and responsive design.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-3xl font-bold">6+</p>
                  <p className="mt-2 text-slate-600">
                    Portfolio-ready projects
                  </p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-3xl font-bold">SQL + React</p>
                  <p className="mt-2 text-slate-600">
                    Growing full-stack and data skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 max-w-4xl leading-8 text-slate-600">
              I’m currently studying web development and building projects that
              strengthen my skills in React, JavaScript, APIs, SQL, and
              responsive design. My background in technical support, mobile
              repair, and quality assurance has taught me how to troubleshoot
              efficiently, communicate clearly, and keep the user experience at
              the center of every solution.
            </p>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group rounded-[2rem] border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  project.featured ? "border-slate-900" : "border-slate-200"
                }`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {project.featured && (
                  <span className="mb-3 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Featured
                  </span>
                )}

                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {project.tech}
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white transition hover:opacity-90"
                  >
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-900 px-4 py-2 text-sm transition hover:bg-slate-50"
                  >
                    Live Demo
                  </a>

                  {project.charts &&
                    project.charts.map((chart) => (
                      <a
                        key={chart.label}
                        href={chart.url}
                        target="_blank"
                        rel="noreferrer"
                        className={chart.style}
                      >
                        {chart.label}
                      </a>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Tech Stack
            </p>
            <h2 className="mt-2 text-3xl font-bold">Skills</h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-3xl font-bold">Let’s Connect</h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I’m looking for opportunities in web development, front-end
              development, and QA. Reach out to talk about projects,
              internships, or remote roles.
            </p>

            <div className="mt-6 space-y-3 text-lg">
              <p>Email: luckettjasmin@gmail.com</p>
              <p>Phone: (318) 730-3200</p>

              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/LuckettJasmin-FS-4"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  LuckettJasmin-FS-4
                </a>
              </p>

              <p>
                Portfolio:{" "}
                <a
                  href="https://jasmin-portfolio-iota.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  jasmin-portfolio-iota.vercel.app
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}