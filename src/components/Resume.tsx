import type { ReactNode } from "react";
import { EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, SOCIALS_DATA } from "@/data";
import { DateProps } from "@/lib/types";

const FULL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: "JavaScript, TypeScript, HTML, CSS, SASS",
  },
  {
    label: "Frameworks & Libraries",
    items:
      "React, React Native, Next.js, Expo, Node.js, Express, Tailwind CSS, Redux, Redux Saga, Zustand, Zod, shadcn/ui",
  },
  {
    label: "Developer Tools",
    items: "Git, Postman, Figma, Prisma",
  },
  {
    label: "Databases",
    items: "MongoDB, Firebase, Supabase",
  },
  {
    label: "Other",
    items: "React Router, Mixpanel, OneSignal",
  },
];

const formatMonthYear = ({ month, year }: DateProps) =>
  `${FULL_MONTHS[month - 1]} ${year}`;

const displayLink = (href: string) =>
  href.replace(/^mailto:/, "").replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const socialHref = (label: string) =>
  SOCIALS_DATA.find((social) => social.label === label)?.href ?? "";

const Rule = ({ gap }: { gap: number }) => (
  <>
    <div aria-hidden="true" style={{ height: gap, backgroundColor: "#ffffff" }} />
    <div aria-hidden="true" style={{ height: 1, backgroundColor: "#000000" }} />
  </>
);

const SectionHeading = ({ children }: { children: string }) => (
  <div className="mb-1.5 mt-3">
    <h2 className="m-0 text-[12pt] font-bold uppercase leading-[1] tracking-[0.08em]">
      {children}
    </h2>
    <Rule gap={5} />
  </div>
);

const ResumeLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    className="inline-block align-baseline text-black"
    style={{ textDecoration: "none", lineHeight: 1 }}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <div style={{ lineHeight: 1 }}>{children}</div>
    <Rule gap={3} />
  </a>
);

export const Resume = () => {
  const email = socialHref("Email");
  const linkedin = socialHref("LinkedIn");
  const github = socialHref("GitHub");
  const location =
    EXPERIENCE_DATA.find((experience) => experience.date.isPresent)?.location ??
    "India";

  const contacts = [
    { label: "kushalnandwani.vercel.app", href: "https://kushalnandwani.vercel.app" },
    linkedin ? { label: displayLink(linkedin), href: linkedin } : null,
    github ? { label: displayLink(github), href: github } : null,
    email ? { label: displayLink(email), href: email } : null,
    { label: "+91 8707077044", href: "tel:+918707077044" },
    { label: location, href: "" },
  ].filter((item): item is { label: string; href: string } => Boolean(item?.label));

  return (
    <article
      id="resume"
      className="mx-auto box-border aspect-[210/297] w-full max-w-[210mm] bg-white px-[12mm] py-[12mm] text-black shadow-md print:aspect-auto print:min-h-[297mm] print:w-[210mm] print:max-w-none print:shadow-none"
      style={{
        fontFamily: '"Times New Roman", Times, "Liberation Serif", serif',
        fontWeight: 400,
        fontSize: "11pt",
        lineHeight: 1.2,
      }}
    >
      <style>{`@media print { @page { size: A4; margin: 0; } }`}</style>
      <header className="text-center">
        <h1 className="text-[26pt] font-bold leading-none">Kushal Nandwani</h1>
        <div className="mt-1.5 flex flex-wrap items-center justify-center text-[9.5pt] leading-snug">
          {contacts.map((contact) => (
            <span
              key={contact.label}
              className="inline-flex items-center whitespace-nowrap [&:not(:first-child)]:before:mx-[0.35em] [&:not(:first-child)]:before:content-['|']"
            >
              {contact.href ? (
                <ResumeLink href={contact.href}>{contact.label}</ResumeLink>
              ) : (
                contact.label
              )}
            </span>
          ))}
        </div>
      </header>

      <section>
        <SectionHeading>Experience</SectionHeading>
        <div className="space-y-2.5">
          {EXPERIENCE_DATA.map((job) => {
            const start = formatMonthYear(job.date.from);
            const end = job.date.isPresent
              ? "Present"
              : formatMonthYear(job.date.to!);

            return (
              <div key={job.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="min-w-0 font-bold">{job.title}</p>
                  <p className="shrink-0 text-right">
                    {start} – {end}
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="min-w-0 italic">{job.role}</p>
                  {job.location && <p className="shrink-0 text-right italic">{job.location}</p>}
                </div>
                {job.description && job.description.length > 0 && (
                  <ul className="m-0 list-none p-0">
                    {job.description.map((item) => (
                      <li key={item} className="pl-[1.15em] [text-indent:-1.15em]">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading>Featured Projects</SectionHeading>
        <div className="space-y-1.5">
          {PROJECTS_DATA.slice(0, 2).map((project) => {
            const projectLinks = [
              project.links.live ? { label: "Live", href: project.links.live } : null,
              project.links.github ? { label: "Code", href: project.links.github } : null,
            ].filter((link): link is { label: string; href: string } => Boolean(link));

            return (
              <div key={project.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="min-w-0 font-bold">{project.title}</p>
                  {projectLinks.length > 0 && (
                    <div className="shrink-0">
                      {projectLinks.map((link) => (
                        <span
                          key={link.label}
                          className="inline-flex items-center [&:not(:first-child)]:before:mx-[0.35em] [&:not(:first-child)]:before:content-['|']"
                        >
                          <ResumeLink href={link.href}>{link.label}</ResumeLink>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {project.description && <p>{project.description}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading>Technical Skills</SectionHeading>
        <div>
          {SKILL_GROUPS.map((group) => (
            <p key={group.label}>
              <span className="font-bold">{group.label}:</span> {group.items}
            </p>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-1.5">
          {EDUCATION_DATA.map((school) => (
            <div key={school.title}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-bold">{school.title}</p>
                <p className="shrink-0">{school.date.to?.year}</p>
              </div>
              <p className="italic">{school.course}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
