import projects from "../data/projects";

const ProjectCard = () => {
  return (
    <section>
      <h2 className="text-6xl font-bold text-primary">
        03<span className="text-secondary">.</span> projects
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        {projects.map((project) => {
          return (
            <li
              className="grid grid-cols-2 justify-items-center mg-6 border-b border-primary"
              key={project.id}>
              <h4 className="text-5xl font-bold text-primary">
                {project.name.split(" ").map((word, index) => (
                  <span key={index} className="block">
                    {word}
                  </span>
                ))}
              </h4>
              <img
                src={
                  project.img ?
                    project.img
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIKvZO_-Db1Vq3is1AHPA_hx8Oy86IrrSUnSX7C_rUw&s=10"
                }
                alt={`snapshot of the project ${project.name}`}
              />
              <h5>
                {project.date.split(" ").map((word, index) => (
                  <span className="block" key={index}>
                    {word}
                  </span>
                ))}
              </h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectCard;
