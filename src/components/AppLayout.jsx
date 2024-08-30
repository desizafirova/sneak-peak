import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const StyledLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 144rem;
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
