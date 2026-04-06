export default function Home() {
  const toolSkills = [
    "Tableau",
    "R Studio",
    "Python",
    "JavaScript",
    "HTML",
    "Microsoft Office",
    "Canva",
  ];

  const softSkills = [
    "Strong Work Ethic",
    "Multitasking",
    "Written Communication",
    "Verbal Communication",
  ];

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <header className="bg-slate-900 px-8 py-10 text-white md:px-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Kyana Hay
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            4214 Monticello Gardens Pl · 813-360-9453 / 868-494-3727 ·
            kmhay@usf.edu
          </p>
        </header>

        <div className="px-8 py-8 md:px-12 md:py-10">
          <section className="mb-8">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Education
            </h2>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                Bachelor of Arts in Statistics | Business Analytics and
                Information Systems Certificate
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                University of South Florida · Summer 2026
              </p>

              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">GPA:</span>{" "}
                  3.87
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Honors:</span>{" "}
                  USF Fall 2023, Spring/Fall 2024, and Spring/Fall 2025 Dean’s
                  List
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Relevant Courses:
                  </span>{" "}
                  Database Design & Administration, Excel & Data Modeling for
                  Business Analytics, Business Application Development,
                  Categorical Data Analysis, R Programming, Nonparametric
                  Statistical Methods, Introductory Statistics I & II,
                  Introduction to Probability, Computational Linear Algebra, AI
                  & Analytics for Organizations, and Computers in Business
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Experience
            </h2>

            <div className="space-y-5">
              <article className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Marketing & Sales Operations Intern
                    </h3>
                    <p className="text-sm text-slate-500">
                      Wizard AI Systems (Remote)
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    November 2025 – Present
                  </p>
                </div>

                <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    Executed automated outreach and lead qualification campaigns
                    across LinkedIn and Facebook.
                  </li>
                  <li>
                    Designed marketing assets in Canva and supported sales
                    processes that contributed to closed deals.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Data Analytics & Research Intern
                    </h3>
                    <p className="text-sm text-slate-500">
                      MAIBROL Insurance Brokers Ltd. · Port of Spain, Trinidad
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    January 2025 – August 2025
                  </p>
                </div>

                <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    Used Excel and Google Forms to identify and analyse trends
                    in insurance claims and customer behaviour from 50+ clients.
                  </li>
                  <li>
                    Built interactive dashboards in Tableau to visualize KPIs
                    and improve reporting.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Facilities Staff
                    </h3>
                    <p className="text-sm text-slate-500">
                      USF Recreation & Wellness Centre, University of South
                      Florida · Tampa, Florida
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    October 2024 – January 2026
                  </p>
                </div>

                <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    Managed facility access, tracked equipment usage, and
                    maintained the lost and found system.
                  </li>
                  <li>
                    Answered inquiries, provided event information, and ensured
                    safe and secure operations.
                  </li>
                  <li>
                    Developed problem-solving, conflict management, and
                    leadership skills.
                  </li>
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Entrepreneur / Nail Technician / Social Media Content
                      Creator
                    </h3>
                    <p className="text-sm text-slate-500">
                      Kymarysse · Tampa, Florida
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-500">
                    January 2024 – Present
                  </p>
                </div>

                <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700">
                  <li>
                    Provided tailored consultations to clients regarding nail
                    care and design preferences.
                  </li>
                  <li>
                    Created engaging social media content resulting in a 1823%
                    increase in social media following in 2 years.
                  </li>
                  <li>
                    Scheduled and kept detailed records of 100+ clients,
                    payments, and services delivered.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Leadership & Professional Development
            </h2>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    General Body Meeting (GBM) Coordinator
                  </h3>
                  <p className="text-sm text-slate-500">
                    LIME – Trinidadian Cultural Club, University of South Florida
                    · Tampa, Florida
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  November 2024 – Present
                </p>
              </div>

              <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700">
                <li>
                  Created and presented weekly PowerPoint sessions and
                  interactive activities to promote Trinidadian culture.
                </li>
                <li>
                  Managed GBM logistics, ensuring smooth execution and fostering
                  an inclusive environment.
                </li>
                <li>
                  Developed strategies to boost membership and enhance club
                  visibility.
                </li>
              </ul>
            </article>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Projects & Portfolio
              </h2>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <ul className="space-y-4 text-sm leading-relaxed text-slate-700">
                  <li>
                    <span className="font-semibold text-slate-900">
                      Personal Blog:
                    </span>{" "}
                    <a
                      href="https://kmhay-zbrix.wordpress.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline underline-offset-2"
                    >
                      kmhay-zbrix.wordpress.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">GitHub:</span>{" "}
                    <a
                      href="https://github.com/kyanahay"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline underline-offset-2"
                    >
                      github.com/kyanahay
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Project:</span>{" "}
                    KAT Manufacturing Dashboard using Excel & Tableau
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Skills
              </h2>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Languages & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {toolSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-10 text-center text-sm text-slate-400">
            Built with Next.js and Tailwind CSS
          </footer>
        </div>
      </div>
    </main>
  );
}