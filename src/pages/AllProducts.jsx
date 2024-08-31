import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../services/apiSneakers';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import StyledProductsGrid from '../components/ProductGrid';

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
    <StyledProductsGrid>
      {sneakers.map((sneaker) => (
        <ProductCard sneaker={sneaker} key={sneaker.id} />
      ))}
    </StyledProductsGrid>
  );
}

export default AllProducts;
