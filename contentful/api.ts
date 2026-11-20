import { createClient } from "contentful";
import {HomePage, Project} from "../types/content-model";
import {TypeHomePage, TypeHomePageFields, TypeProject, TypeProjectFields} from "./types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Draft content via the Content Preview API. Only used in Next.js preview mode
// (entered through /api/preview); falls back to published content if unset.
const previewClient = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: "preview.contentful.com",
    })
  : client;

const getClient = (preview = false) => (preview ? previewClient : client);

export const getHomePage = async (preview = false): Promise<TypeHomePage> => {
    const homePage = await getClient(preview).getEntries<TypeHomePageFields>({
        content_type: "homePage",
    });
    return homePage.items[0];
};

export const getProjectList = async (preview = false): Promise<TypeProject[]> => {
  return getClient(preview).getEntries<TypeProjectFields>({
    content_type: "project",
    include: 3,
  }).then(projects => projects.items);
};

export type ProjectWithPointers = TypeProject & {next: string, previous: string};

export const getProject = async (slug: string, preview = false): Promise<ProjectWithPointers | null> => {
  const projects = await getProjectList(preview);
  const projectIndex = projects.findIndex((project) => project.fields.slug === slug);
  const project = projects[projectIndex];
  if (!project) return null;
  const next = projects[projectIndex + 1];
  const prev = projects[projectIndex - 1];

  let parsedData = await getClient(preview).parseEntries<TypeProjectFields>(project);
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

export const getProjectNavigation = async (slug: string, preview = false): Promise<ProjectNavigation> => {
  const homePage = await getHomePage(preview);
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
