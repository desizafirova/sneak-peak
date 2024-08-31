import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../services/apiSneakers';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40rem);
  justify-content: center;
  align-items: center;
  gap: 6rem;
  margin: 10rem auto;
`;

function AllProducts() {
  const {
    isLoading,
    data: sneakers, // Сега данните се наричат "data"
    error,
  } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getSneakers,
  });

  console.log(sneakers);

  if (isLoading) return <Spinner />;
  if (error) return <div>Sneakers could not be loaded 💥</div>;

  return (
    <StyledProductsGrid>
      {sneakers.map((sneaker) => (
        <ProductCard sneaker={sneaker} key={sneaker.id} />
      ))}
    </StyledProductsGrid>
  );
}

export default AllProducts;
