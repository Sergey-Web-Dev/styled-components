import { mockOffersData } from "../../constants/mockData.ts";
import { ListsElem } from "./ListsElem.styled.js";
import { List } from "../List/List.jsx";

export const Lists = () => {
  return (
    <ListsElem>
      {mockOffersData
        .filter((el) => el.id <= 6)
        .map(
          ({
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
          }) => (
            <List
              key={id}
              id={id}
              number={number}
              title={title}
              subtitle={subtitle}
              discount={discount}
              hashCode={hashCode}
              image={image}
              description={description}
              level={level}
              price={price}
              mentor={mentor}
              mentorExperiance={mentorExperiance}
              duration={duration}
              linkedinLink={linkedinLink}
            />
          )
        )}
    </ListsElem>
  );
};
