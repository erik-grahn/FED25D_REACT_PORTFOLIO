import projects from "../data/projects";

const ProjectCard = () => {
  return (
    <section className="my-24">
      <div className="content-padding">
        <h2 className="h2 text-primary">
          03<span className="text-secondary">.</span>projects
        </h2>
        <ul className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start">
          {projects.map((project) => {
            return (
              <li
                className="grid grid-cols-2 w-sm mb-14 h-104 justify-items-center border-b border-primary lg:border lg:p-4 lg:rounded-xl"
                key={project.id}>
                <h4 className="text-4xl font-bold text-primary justify-self-start">
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
                <h5 className="justify-self-start pt-6 font-light">
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
      </div>
    </section>
  );
};

export default ProjectCard;
