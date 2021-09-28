import styled from "styled-components";

const Section = styled.section`
  padding: 1em;
  margin: 1em;
  // https://tobiasahlin.com/blog/layered-smooth-box-shadows/
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 2px 2px rgba(0, 0, 0, 0.05),
    0 4px 4px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05),
    0 16px 16px rgba(0, 0, 0, 0.05);
  height: fit-content;
  background-color: ${({ theme }) => theme.card};
  border-radius: 3px;
  transition: background-color 0.3s linear;
`;

export default Section;
