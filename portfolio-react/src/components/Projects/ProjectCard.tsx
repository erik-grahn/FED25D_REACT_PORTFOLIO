import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <li
      className="grid grid-cols-2 w-2xs mt-16 h-92 justify-items-center not-last:border-b border-primary md:border-none"
      key={project.id}>
      <h4 className="text-2xl font-bold text-primary justify-self-start">
        {project.name.split(" ").map((word, index) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </h4>
      <img
        className="justify-self-end max-w-32"
        src={
          project.img ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIKvZO_-Db1Vq3is1AHPA_hx8Oy86IrrSUnSX7C_rUw&s=10"
        }
        alt={`snapshot of the project ${project.name}`}
      />
      <p className="justify-self-start">
        {project.date.split(" ").map((date, index) => (
          <span className="block text-primary" key={index}>
            {date}
          </span>
        ))}
      </p>
    </li>
  );
};

export default ProjectCard;
