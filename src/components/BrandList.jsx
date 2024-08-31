import styled from 'styled-components';

const StyledBrandList = styled.section`
  background-color: var(--color-grey-200);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const Img = styled.img`
  height: 6rem;
  width: 6rem;
`;

function BrandList() {
  return (
    <StyledBrandList>
      <Img src="/adidas.svg" />
      <Img src="/nike.svg" />
      <Img src="/converse.png" />
      <Img src="/vans.png" />
    </StyledBrandList>
  );
}

export default BrandList;
