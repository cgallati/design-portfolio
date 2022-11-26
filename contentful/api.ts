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
    }))
  );
};

export const getProject = async (slug: string): Promise<IProject> => {
  const projects = await getProjectList();
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  return {
    ...projects[projectIndex],
    next: projects[projectIndex + 1] ? projects[projectIndex + 1].slug : null,
    previous: projects[projectIndex - 1]
      ? projects[projectIndex - 1].slug
      : null,
  };
};
