export { projects, featuredProjects, personalProject } from '@/content/projects';
import { projects, featuredProjects, personalProject } from '@/content/projects';

/**
 * Project repository accessors to encapsulate content access and query logic.
 */

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return featuredProjects;
}

export function getProjectById(id) {
  if (!id) return null;
  return projects.find((project) => project.id === id) || null;
}

export function getPersonalProject() {
  return personalProject;
}
