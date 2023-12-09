import styled from "styled-components";

export const DescriptionElem = styled.p`
  ${(props) =>
    props.gray
      ? `color: rgb(128, 128, 128);`
      : props.blue
      ? `
      color: rgb(0, 17, 173);
      font-weight: 700;`
      : props.center
      ? `
      text-align: center;
    margin-top: 3rem;
    padding: 0 6rem;
    font-size: 22px;
    color: #116e5b;`
      : `
color: rgb(128, 128, 128);
margin-bottom: 0.75rem;
font-size: 0.875rem;
line-height: 1.25rem;
`}
`;
