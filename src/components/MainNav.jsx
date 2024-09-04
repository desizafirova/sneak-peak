import { PiHeartStraightBold } from 'react-icons/pi';
import { LuShoppingBasket } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import { useUser } from '../hooks/useUser';
import { useLogout } from '../hooks/useLogout';
import SpinnerMini from './SpinnerMini';

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CategoryList = styled.ul`
  display: flex;
  gap: 3rem;
`;

const CTAList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    font-weight: 700;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();

  return (
    <nav>
      <NavList>
        <div>
          <StyledNavLink to="/">
            <Logo />
          </StyledNavLink>
        </div>

        <CategoryList>
          <li>
            <StyledNavLink to="/men">Men</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/women">Women</StyledNavLink>
          </li>
        </CategoryList>

        <CTAList>
          <li>
            <StyledNavLink to="/wishlist">
              <PiHeartStraightBold />
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">
              <LuShoppingBasket />
            </StyledNavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <StyledNavLink to="/" onClick={logout}>
                {isLoading ? <SpinnerMini /> : 'Logout'}
              </StyledNavLink>
            ) : (
              <StyledNavLink to="/login">Login</StyledNavLink>
            )}
          </li>
        </CTAList>
      </NavList>
    </nav>
  );
}

export default MainNav;
