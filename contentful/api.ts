import { createClient } from "contentful";
import { IProject } from "../types/project";
import { TypeProjectFields } from "./types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
});

export const getProjectList = async (): Promise<IProject[]> => {
  return await client.getEntries<TypeProjectFields>().then((res) =>
    res.items.map((project) => ({
      title: project.fields.title,
      subtitle: project.fields.excerpt,
      bgImage: project.fields.coverImage,
      slug: project.fields.slug,
      id: project.sys.id,
      content: project.fields.content,
      order: project.fields.order,
    }))
  );
};

export const getProject = async (slug: string): Promise<IProject> => {
  const projects = await getProjectList();
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];
  const next = projects[projectIndex + 1];
  const prev = projects[projectIndex - 1];

  let parsedData = await client.parseEntries<TypeProjectFields>(project);
  return {
    ...project,
    // @ts-ignore
    content: parsedData.content,
    next: next ? next.slug : null,
    previous: prev ? prev.slug : null,
  };
};
