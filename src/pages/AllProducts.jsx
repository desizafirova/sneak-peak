import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../services/apiSneakers';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import StyledProductsGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const GridContainerProductPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
`;

function AllProducts() {
  const {
    isLoading,
    data: sneakers,
    error,
  } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getSneakers,
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>Sneakers could not be loaded 💥</div>;

  return (
    <>
      <GridContainerProductPage>
        <Sidebar />
        <StyledProductsGrid>
          {sneakers.map((sneaker) => (
            <ProductCard sneaker={sneaker} key={sneaker.id} />
          ))}
        </StyledProductsGrid>
      </GridContainerProductPage>
    </>
  );
}

export default AllProducts;
