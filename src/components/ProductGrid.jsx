import styled from 'styled-components';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 35rem);
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin: 10rem auto;
`;

export default StyledProductsGrid;
