import { ProjectCardArticle, ProjectCardImage } from "./project-card.styles";
import { Asset } from "contentful";
import Link from "next/link";

export const ProjectCard = ({
  title,
  subtitle,
  img,
  slug,
}: {
  title: string;
  subtitle: string;
  img: Asset;
  slug: string;
}) => {
  const imgSize = img.fields.file.details.image;
  const ratio = imgSize.height / imgSize.width;
  return (
    <Link href={"/project/" + slug}>
      <ProjectCardArticle {...imgSize} ratio={ratio}>
        <ProjectCardImage
          alt={img.fields.description}
          src={"https:" + img.fields.file.url}
          width={img.fields.file.details.image.width}
          height={img.fields.file.details.image.height}
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
