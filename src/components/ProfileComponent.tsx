import pfp from "./../assets/pfp.jpeg";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FileDown } from "lucide-react";
import { IoMail } from "react-icons/io5";
import ResumePDF from "./../assets/Bank Letter.pdf";

// Dynamic profile data
const profileData = {
  name: "Thant Pyae Sone Htoo (Andrew)",
  role: "Full Stack Web Developer",
  location: "📍 Newcastle, United Kingdom",
  bio: "Building Real-World Solutions. Not Just Code.",
  resumeLink: "#", // replace with actual resume link
  socialLinks: [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Andrew-ft",
      label: "GitHub",
    },
    {
      icon: <IoMail size={20} />,
      href: "mailto:thantpyaes01@gmail.com",
      label: "Email",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/thantpyae/",
      label: "LinkedIn",
    },
  ],
};

export default function ProfileComponent() {
  return (
    <div className="flex flex-col items-start space-y-3">
      <img src={pfp} alt="pfp" className="rounded-full w-40" />
      <h1 className="text-xl font-bold text-left">{profileData.name}</h1>
      <p className="text-md opacity-70 tracking-wide">{profileData.role}</p>
      <p className="text-sm opacity-70 tracking-wide">{profileData.location}</p>
      <p className="opacity-80 text-sm">{profileData.bio}</p>

      <div className="flex space-x-3 items-center">
        <a href={ResumePDF} download="Bank Letter.pdf">
          <Button className="cursor-pointer flex items-center gap-2">
            <FileDown />
            Resume
          </Button>
        </a>

        <div className="flex space-x-3 ml-2 items-center">
          {profileData.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
