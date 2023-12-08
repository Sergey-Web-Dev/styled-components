import styled from "styled-components";

export const DivBlockElem = styled.div`
  ${(props) =>
    props.right
      ? ` text-align: right; `
      : props.round
      ? `
      border: 2px solid ${
        props.subtitle === "beginner" ? "rgb(250, 192, 0)" : "rgb(2, 173, 16)"
      };
      border-radius: 9999px;
      display: inline-block;
      padding: 0.25rem;
      padding-left: 0.375rem;
      padding-right: 0.375rem;
      margin-bottom: 0.75rem
      

  `
      : `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 0.75rem;
  `}
`;
