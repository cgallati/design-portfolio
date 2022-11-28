import { ProjectCardArticle, ProjectCardImage } from "./project-card.styles";
import { Asset } from "contentful";
import Link from "next/link";

export const ProjectCard = ({
  title,
  subtitle,
  img,
  slug,
  index,
}: {
  title: string;
  subtitle: string;
  img: Asset;
  slug: string;
  index: number;
}) => {
  const imgSize = img.fields.file.details.image;
  return (
    <Link href={"/project/" + slug}>
      <ProjectCardArticle index={index}>
        <ProjectCardImage
          alt={img.fields.description}
          src={"https:" + img.fields.file.url}
          width={imgSize.width}
          height={imgSize.height}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </ProjectCardArticle>
    </Link>
  );
};
