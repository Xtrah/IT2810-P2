import styled from "styled-components";
import ThemeToggle from "./Theme/ThemeToggle";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.card};
  transition: background 0.3s linear, color 0.3s linear;
`;

const NavContentWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 60%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1em;
`;

function Navbar() {
  return (
    <StyledNav>
      <NavContentWrapper>
        <Title>Gitlab mini-dashboard</Title>
        <ThemeToggle />
      </NavContentWrapper>
    </StyledNav>
  );
}

export default Navbar;
