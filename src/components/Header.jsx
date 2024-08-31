import styled from 'styled-components';
import { useEffect, useState } from 'react';

import MainNav from './MainNav';

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  padding: 0 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  position: ${(props) => (props.isFixed ? 'fixed' : 'static')};
  top: 0;
  width: 100%;
  z-index: 1000;
`;

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const viewPortHeight = window.innerHeight;

      setIsFixed(scrollPosition > viewPortHeight);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader isFixed={isFixed}>
      <MainNav />
    </StyledHeader>
  );
}

export default Header;
