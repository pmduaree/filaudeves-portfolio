import {PROJECT_TYPES, PROJECTS} from "../src/data/projects";

export const arrayIntoSectionsOfTwo = (elements) => {
  const arrayInTwo = [];
  elements.forEach((element, index) => {
    if (index % 2 === 0) {
      arrayInTwo.push([]);
    }
    arrayInTwo[arrayInTwo.length - 1].push(element)
  });
  return arrayInTwo
};

export const filterProjects = (currentProjectType) => {
  const projects = PROJECTS;

  let filteredProjects = [];
  if (currentProjectType === PROJECT_TYPES.ALL_PROJECTS.name) {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter((project) => project.type === currentProjectType);
  }
  return filteredProjects;
};