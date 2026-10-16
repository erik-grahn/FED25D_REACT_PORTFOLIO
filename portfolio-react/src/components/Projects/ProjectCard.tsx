import { span } from "motion/react-client";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li
      className="w-2xs py-8 h-auto justify-items-center not-last:border-b border-primary md:border-none"
      key={project.id}>
      <p className="justify-self-end mb-4">
        {project.category.map((category) => (
          <span
            className="font-bold text-grey2 px-2 not-last:border-r"
            key={category}>
            {category}
            {""}
          </span>
        ))}
      </p>
      <div className="grid grid-cols-2">
        <h4 className="text-2xl font-bold text-primary justify-self-start">
          <a
            href={project.url}
            target="_blank"
            className="hover:text-secondary">
            {project.name.split(" ").map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </a>
        </h4>
        <a href={project.url} target="_blank" className="justify-self-end">
          <img
            className=" max-w-32"
            src={
              project.img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIKvZO_-Db1Vq3is1AHPA_hx8Oy86IrrSUnSX7C_rUw&s=10"
            }
            alt={`snapshot of the project ${project.name}`}
          />
        </a>
        <p className="justify-self-start mt-4">
          {project.date.split(" ").map((date, index) => (
            <span className="block text-primary" key={index}>
              {date}
            </span>
          ))}
        </p>
      </div>
    </li>
  );
};

export default ProjectCard;
