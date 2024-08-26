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
    include: 2,
  }).then(projects => projects.items
    .map((project) => ({
      ...project,
      order: project.fields.order ? project.fields.order : null,
    }))
    .sort((a, b) => (a.order <= b.order ? -1 : 1)));
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
