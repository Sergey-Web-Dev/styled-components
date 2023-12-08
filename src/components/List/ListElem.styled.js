import styled from "styled-components";

export const ListElem = styled.div`
  width: 32%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  padding: 1.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
