import { createClient } from "contentful";
import {HomePage, Project} from "../types/content-model";
import {TypeHomePage, TypeHomePageFields, TypeProject, TypeProjectFields} from "./types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getHomePage = async (): Promise<TypeHomePage> => {
    const homePage = await client.getEntries<TypeHomePageFields>({
        content_type: "homePage",
    });
    return homePage.items[0];
};

export const getProjectList = async (): Promise<TypeProject[]> => {
  return client.getEntries<TypeProjectFields>({
    content_type: "project",
    include: 3,
  }).then(projects => projects.items);
};

export type ProjectWithPointers = TypeProject & {next: string, previous: string};

export const getProject = async (slug: string): Promise<ProjectWithPointers> => {
  const projects = await getProjectList();
  const projectIndex = projects.findIndex((project) => project.fields.slug === slug);
  const project = projects[projectIndex];
  const next = projects[projectIndex + 1];
  const prev = projects[projectIndex - 1];

  let parsedData = await client.parseEntries<TypeProjectFields>(project);
  return {
    ...project,
    // @ts-ignore
    content: parsedData.content || null,
    next: next ? next.fields.slug : null,
    previous: prev ? prev.fields.slug : null,
  };
};

export type ProjectNavigation = {
  next: string | null;
  previous: string | null;
};

export const getProjectNavigation = async (slug: string): Promise<ProjectNavigation> => {
  const homePage = await getHomePage();
  const projects = homePage.fields.projects;
  
  if (!projects) {
    return { next: null, previous: null };
  }

  const projectIndex = projects.findIndex((project) => project.fields.slug === slug);
  
  if (projectIndex === -1) {
    return { next: null, previous: null };
  }

  const next = projects[projectIndex + 1];
  const previous = projects[projectIndex - 1];

  return {
    next: next ? next.fields.slug : null,
    previous: previous ? previous.fields.slug : null,
  };
};
