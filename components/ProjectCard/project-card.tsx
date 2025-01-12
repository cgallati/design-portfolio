import {
  ProjectCardArticle,
  ProjectCardImage,
  MobileProjectInfo,
  MobileProjectTitle,
  MobileProjectSubtitle,
  HoverProjectInfo,
  HoverProjectTitle,
  HoverProjectSubtitle,
} from "./project-card.styles";
import { Asset } from "contentful";
import Link from "next/link";
import Image from "next/image";

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
    <Link
      href={"/project/" + slug}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
        <HoverProjectInfo className="hover-info">
          <HoverProjectTitle>{title}</HoverProjectTitle>
          <HoverProjectSubtitle>{subtitle}</HoverProjectSubtitle>
        </HoverProjectInfo>
        <MobileProjectInfo>
          <MobileProjectTitle>
            {title}
            <Image
              src="/assets/right-arrow.svg"
              alt="Right arrow"
              width={24}
              height={18}
              style={{
                marginLeft: "auto",
                marginRight: "8px",
                marginTop: "10px",
              }}
            />
          </MobileProjectTitle>
          <MobileProjectSubtitle>{subtitle}</MobileProjectSubtitle>
        </MobileProjectInfo>
      </ProjectCardArticle>
    </Link>
  );
};
