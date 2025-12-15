import { Badge } from "./ui/badge";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import GW from "./../assets/GW.jpeg";
import KMD from "./../assets/KMD.png";
import NU from "./../assets/NU.jpeg";
import UIT from "./../assets/UIT.png";

// Dynamic data
const skills = {
  languages: [
    { name: "JavaScript", color: "bg-sky-950 text-blue-300" },
    { name: "TypeScript", color: "bg-sky-950 text-blue-300" },
    { name: "PHP", color: "bg-sky-950 text-blue-300" },
    { name: "Kotlin", color: "bg-sky-950 text-blue-300" },
    { name: "Java", color: "bg-sky-950 text-blue-300" },
  ],
  frameworks: [
    { name: "ReactJS", color: "bg-green-950 text-green-300" },
    { name: "React Native", color: "bg-green-950 text-green-300" },
    { name: "Bootstrap", color: "bg-green-950 text-green-300" },
    { name: "Tailwind", color: "bg-green-950 text-green-300" },
    { name: "NodeJS", color: "bg-green-950 text-green-300" },
    { name: "ExpressJS", color: "bg-green-950 text-green-300" },
    { name: "REST APIs", color: "bg-green-950 text-green-300" },
  ],
  databases: [
    { name: "MySQL", color: "bg-red-950 text-red-300" },
    { name: "Microsoft SQL Server", color: "bg-red-950 text-red-300" },
    { name: "MongoDB", color: "bg-red-950 text-red-300" },
    { name: "Postgres", color: "bg-red-950 text-red-300" },
    { name: "Prisma", color: "bg-red-950 text-red-300" },
    { name: "SQLite", color: "bg-red-950 text-red-300" },
  ],
  tools: [
    { name: "Git", color: "bg-yellow-950 text-yellow-200" },
    { name: "Photoshop", color: "bg-yellow-950 text-yellow-200" },
    { name: "Illustrator", color: "bg-yellow-950 text-yellow-200" },
    { name: "Figma", color: "bg-yellow-950 text-yellow-200" },
  ],
};

const projects = [
  {
    title: "KeyBurm Typing Simulation Website",
    role: "NodeJS Backend Developer",
    description: [
      "Implemented English and Burmese word generation features based on time and word limits.",
      "Developed backend logic to manage word sequencing and optimize performance.",
    ],
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MySQL"],
    links: {
      client: "https://github.com/one-project-one-month/MyanType-React",
      server: "https://github.com/one-project-one-month/MyanType-Nodejs",
      live: "https://key-burm.vercel.app/",
    },
  },
  {
    title: "EduFlexio School Management Website",
    role: "ReactJS Frontend Developer",
    description: [
      "Designed intuitive UI/UX layouts and implemented responsive student dashboards.",
      "Built reusable frontend components to enhance functionality and user engagement.",
    ],
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL"],
    links: {
      code: "https://github.com/vcxknb",
      live: "http://ec2-54-251-241-38.ap-southeast-1.compute.amazonaws.com/",
    },
  },
  {
    title:
      "OrbiUIT University Social Media & AI-Based Major Recommendation Website",
    role: "ReactJS Frontend Developer",
    description: [
      "Developed admin panels and social media interfaces to improve platform usability.",
      "Integrated frontend with backend APIs to ensure seamless data flow and functionality. ",
    ],
    technologies: ["ReactJS", "Java", "Spring Boot", "Supabase", "Python"],
    links: {
      code: "https://github.com/Orbi-UiT",
      live: "https://orbi-uit.vercel.app/",
    },
  },
  {
    title:
      "CoreFitness Online Fitness Tracker",
    role: "Full Stack Developer",
    description: [
      "Developed a role-based fitness management system for admins, trainers, and members with features like workouts, routines, and progress tracking.",
      "Implemented real-time trainer–member chat, routine completion tracking, and fully integrated frontend–backend workflows.",
    ],
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "PostgresSQL", "Prisma"],
    links: {
      code: "https://github.com/Andrew-ft/Fitness-Tracker",
      live: "",
    },
  },
];

const education = [
  {
    school: "Northumbria University, Newcastle",
    degree: "BSc(Hons) In Artificial Intelligence",
    period: "Sept 2025 - Current",
    image: NU,
  },
  {
    school: "Greenwich University",
    degree: "BSc(Hons) In Computing",
    period: "Feb 2025 - Nov 2025",
    image: GW,
  },
  {
    school: "KMD Institue",
    degree: "Higher National Diploma In Computing",
    period: "Nov 2022 - April 2024",
    image: KMD,
  },
  {
    school: "University Of Information Technology",
    degree: "BSc(Hons) In Computer Science",
    period: "Nov 2022 - Sept 2025",
    image: UIT,
  },
];

export default function InformationComponent() {
  return (
    <div className="flex flex-col items-start space-y-3">
      <div className="mb-10">
        <h1 className="text-xl font-bold text-start mb-5">About Me</h1>
        <p className="text-left text-sm mb-3">
          I’m Thant Pyae Sone Htoo (Andrew), a 21-year-old Full Stack Web
          Developer with a strong academic foundation in computer science. From
          the start of my journey, I’ve been passionate about technology and
          problem-solving, developing projects that combine creativity with
          functionality.
        </p>
        <p className="text-left text-sm mb-3">
          My core expertise lies in building end-to-end web applications,
          including KeyBurm, Eduflexio, OrbiUIT and CoreFitness. I work across both frontend
          and backend technologies, ensuring seamless integration between user
          interfaces and robust backend systems. Currently I'm working on my
          personal project, fitness tracking project.
        </p>
        <p className="text-left text-sm mb-3">
          Alongside my computing career, I’ve cultivated skills in graphic
          design, mastering tools like Adobe Photoshop and Illustrator. This
          design experience allows me to craft visually appealing, user-friendly
          interfaces and branding elements that elevate my development projects
          beyond just functionality.
        </p>
        <p className="text-left text-sm">
          Driven by curiosity and a desire to innovate, I continue to expand my
          technical and creative skillset — blending code and design to deliver
          digital products that are not only powerful but also intuitive and
          visually engaging.
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-col items-start space-y-5 mb-10">
        <h1 className="text-xl font-bold">Skills</h1>

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-col items-start">
            <h2 className="text-lg font-medium capitalize">{category}</h2>
            <div className="flex flex-wrap justify-start mt-2 gap-2">
              {items.map((item) => (
                <Badge key={item.name} className={`h-7 ${item.color}`}>
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-10 mb-10">
        <h1 className="text-xl font-bold flex">Projects</h1>
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-row items-start gap-5">
            <div className="w-0.5 bg-gray-500/30 rounded self-stretch"></div>
            <div className="flex flex-col items-start">
              <p className="text-lg font-semibold text-left">{project.title}</p>
              <p className="text-md underline text-left">{project.role}</p>
              <ul className="text-start opacity-50 text-sm list-disc list-inside pt-4">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} className="bg-violet-950 h-7 text-violet-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-5">
                {project.links.client && (
                  <a
                    href={project.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <FaGithub /> View Client Code
                  </a>
                )}
                {project.links.server && (
                  <a
                    href={project.links.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <FaGithub /> View Server Code
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 ease-in-out"
                  >
                    <MdOpenInNew /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="space-y-5">
        <h1 className="text-xl font-bold flex">Education</h1>
        {education.map((edu, idx) => (
          <div key={idx} className="flex flex-row items-center gap-5">
            <div className="w-0.5 bg-gray-500/30 rounded self-stretch"></div>
            <img
              src={edu.image}
              alt={edu.school}
              className="rounded-full w-23"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-lg font-semibold text-left">{edu.degree}</h1>
              <h2 className="text-md text-left">{edu.school}</h2>
              <h3 className="opacity-50 text-sm">{edu.period}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
