import { ListElem } from "./ListElem.styled";
import { DivBlock } from "../DivBlockElem/DivBlock";
import Title from "../Title/Title";
import Span from "../Span/Span";
import Description from "../Description/Description";
import Image from "../Image/Image";
import Link from "../Link/Link";

export const List = ({
  id,
  number,
  title,
  subtitle,
  discount,
  hashCode,
  image,
  description,
  level,
  price,
  mentor,
  mentorExperiance,
  duration,
  linkedinLink,
}) => {
  return (
    <ListElem>
      <DivBlock right="right">
        <DivBlock round="round" subtitle={subtitle}>
          .{number}
        </DivBlock>
      </DivBlock>
      <Title>
        {title} <Span subtitle={subtitle}>{subtitle}</Span>
      </Title>
      <DivBlock>
        <Description>{hashCode}</Description>
        <Description>
          Level: <Span gray="gray">{level}</Span>
        </Description>
      </DivBlock>
      <Image src={image} alt={title} />
      <Description>{description}</Description>
      <DivBlock>
        <Description gray="gray">
          <Span subtitle={subtitle}>${price}</Span> per month
        </Description>
        <Description>
          Duration: <Span bold="bold">{duration}</Span>{" "}
          <Span gray="gray">months</Span>
        </Description>
      </DivBlock>
      {discount && (
        <DivBlock>
          <Description gray="gray">
            <Span blue="blue">$180</Span> per month
          </Description>
          <Description blue="blue">1+1 and get discount</Description>
        </DivBlock>
      )}
      <DivBlock>
        <Description gray="gray">
          Mentor: <Span gray="gray">{mentor}</Span>
        </Description>
        {linkedinLink && (
          <Link href={linkedinLink}>
            <Image src="/icons8-linkedin-24.png" />
          </Link>
        )}
      </DivBlock>
      <Description>
        Experiance: <Span gray="gray">{mentorExperiance}+ years</Span>
      </Description>
      <DivBlock right="right">
        <Link button="button">Show more</Link>
      </DivBlock>
    </ListElem>
  );
};
