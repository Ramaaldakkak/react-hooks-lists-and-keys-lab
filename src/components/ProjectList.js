import React from "react";
import ProjectItem from "./ProjectItem";

// In the `ProjectList` component, a prop of `projects` is being passed down from the `App` component with an array of objects. For each object in the array, render one `ProjectItem` component with the correct props. Use the `id` of the project for the `key` prop.

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map(project => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
