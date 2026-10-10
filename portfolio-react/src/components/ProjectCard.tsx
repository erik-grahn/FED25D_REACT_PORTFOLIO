import projects from "../data/projects";

const ProjectCard = () => {
  return (
    <section>
      <h2 className="text-6xl font-bold text-primary">
        03<span className="text-secondary">.</span> projects
      </h2>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <h4>{project.name}</h4>
              <img
                src={
                  project.img ?
                    project.img
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIKvZO_-Db1Vq3is1AHPA_hx8Oy86IrrSUnSX7C_rUw&s=10"
                }
                alt={`snapshot of the project ${project.name}`}
              />
              <h5>{project.date}</h5>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectCard;
