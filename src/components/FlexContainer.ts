import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default FlexContainer;
