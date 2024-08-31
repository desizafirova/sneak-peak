import styled from 'styled-components';

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-100);
  max-width: 40rem;
  min-width: 20rem;
`;

function Sidebar() {
  return <StyledSideBar>Sidebar</StyledSideBar>;
}

export default Sidebar;
