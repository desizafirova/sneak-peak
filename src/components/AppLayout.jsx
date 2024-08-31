import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const StyledLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main``;

const Container = styled.div`
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
