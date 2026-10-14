import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const projectCategories = ["html", "css", "js", "ts", "api", "react"];

const Projects = () => {
  const [filters, setFilter] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setFilter((previousFilters) => {
      if (previousFilters.includes(category)) {
        return previousFilters.filter((filter) => filter !== category);
      }
      return [...previousFilters, category];
    });
  };

  const filteredProjects = projects.filter((project) => {
    return filters.every((filter) => project.category.includes(filter));
  });

  return (
    <section className="w-full pt-16">
      <div className="">
        <h2 className="content-padding h2 text-primary">
          03<span className="text-secondary">.</span>projects
        </h2>
        <div className="content-padding">
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <button
                className={`filter-button ${filters.includes(category) ? "bg-secondary" : "bg-primary hover:bg-grey2"}`}
                key={category}
                onClick={() => toggleFilter(category)}>
                {category}
              </button>
            ))}
          </div>
        </div>
        <ul className="content-padding grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center xl:justify-items-start">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
