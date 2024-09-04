import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const StyledLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Main>
          <Outlet />
        </Main>
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
