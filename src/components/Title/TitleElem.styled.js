import styled from "styled-components";

export const TitleElem = styled.h1`
  ${(props) =>
    props.center
      ? `
  text-align: center;
    font-weight: 900;
    margin-top: 3rem;
    font-size: 30px;
    color: green;`
      : `
  text-transform: uppercase;
  font-weight: 900;`}
`;
