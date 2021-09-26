import styled from 'styled-components';
import ThemeToggle from './Theme/ThemeToggle';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.card};
`;

const Title = styled.h1`
  font-size: 1em;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Title>Gitlab mini-dashboard</Title>
      <ThemeToggle />
    </StyledNav>
  );
};

export default Navbar;
