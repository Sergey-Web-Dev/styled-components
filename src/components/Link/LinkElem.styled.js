import styled from "styled-components";

export const LinkElem = styled.a`
  ${(props) =>
    props.button &&
    `
display: inline-block;
  padding: 0.5rem;
  margin-top: 1.5rem;
  width: 30%;
  background-color: rgb(0, 0, 0);
  color: #ffffff;
  text-align: center;
  font-weight: 900;
  border-radius: 0.25rem;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-16px);
  }`}
`;
