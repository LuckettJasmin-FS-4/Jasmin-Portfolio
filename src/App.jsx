import pawstagramImg from "./assets/pawstagram.png";
import travelImg from "./assets/travel.png";
import hoppitzImg from "./assets/hoppitz.png";
import lineChartImg from "./assets/lineChart.png";

export default function JasminPortfolio() {
  const projects = [
    {
      title: "Pawstagram",
      tech: "React, Styled Components, JavaScript",
      description: "An Instagram-style social app.",
      github: "https://github.com/LuckettJasmin-FS-4/luckett-jasmin-dev2501a",
      demo: "https://your-pawstagram-demo-link.com",
      image: pawstagramImg,
    },
    {
      title: "Ready Set Travel",
      tech: "HTML, CSS, JavaScript",
      description:
        "A responsive multi-page travel website with booking features.",
      github: "https://github.com/ePortfolios/wdv119-LuckettJasmin-FS-2",
      demo: "https://your-readysettravel-demo-link.com",
      image: travelImg,
    },
    {
      title: "Hoppitz Destinations",
      tech: "HTML, CSS, JavaScript",
      description: "Modern travel site with clean UI.",
      github: "https://github.com/LuckettJasmin-FS-4/hoppitz-destinations",
      demo: "https://your-hoppitz-demo-link.com",
      image: hoppitzImg,
    },
    {
      title: "Gas Price SQL Analysis",
      tech: "SQL, Python, Pandas, Flourish",
      description:
        "Analyzed U.S. gas price trends using SQL and created interactive charts.",
      github:
        "https://github.com/LuckettJasmin-FS-4/gas-price-sql-analysis",
      demo:
        "https://www.kaggle.com/code/jasminluckett/rise-of-gas-prices-in-the-u-s-a-sql-analysis",
      lineChart:
        "https://public.flourish.studio/visualisation/28566700/",
      pieChart:
        "https://public.flourish.studio/visualisation/28567731/",
      image: lineChartImg,
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Responsive Design",
    "Git & GitHub",
    "SQL",
    "QA Testing",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white p-6">
        <h1 className="text-3xl font-bold">Jasmin J. Luckett</h1>
        <p className="text-slate-600">
          Web Developer • Front-End • QA-Oriented
        </p>
      </header>

      <main>
        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border bg-white p-6 shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-48 w-full rounded-xl object-cover"
                />

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {project.tech}
                </p>

                <p className="mt-4 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white"
                  >
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border px-4 py-2 text-sm"
                  >
                    Live Demo
                  </a>

                  {project.lineChart && (
                    <a
                      href={project.lineChart}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-blue-500 px-4 py-2 text-sm text-blue-600"
                    >
                      Line Chart
                    </a>
                  )}

                  {project.pieChart && (
                    <a
                      href={project.pieChart}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-green-500 px-4 py-2 text-sm text-green-600"
                    >
                      Pie Chart
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}