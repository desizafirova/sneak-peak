import styled from 'styled-components';

import MainNav from './MainNav';

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  padding: 0 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  position: sticky;
  top: 95;
`;

function Header() {
  return (
    <StyledHeader>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
