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
      <Img src="../../public/brandlist/adidas.svg" />
      <Img src="../../public/brandlist/nike.svg" />
      <Img src="../../public/brandlist/converse.png" />
      <Img src="../../public/brandlist/vans.png" />
    </StyledBrandList>
  );
}

export default BrandList;
