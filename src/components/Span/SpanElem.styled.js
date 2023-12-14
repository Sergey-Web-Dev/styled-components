import styled from "styled-components";

export const SpanElem = styled.span`
  ${(props) =>
    props.gray
      ? `color: rgb(128, 128, 128)`
      : props.bold
      ? `font-weight: 900;`
      : props.blue
      ? `
      color: rgb(0, 17, 173);
      font-weight: 900;`
      : `
  color: ${
    props.subtitle === "beginner" ? "rgb(250, 192, 0)" : "rgb(2, 173, 16)"
  };
  `}
`;
