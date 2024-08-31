import { useQuery } from '@tanstack/react-query';
import StyledProductsGrid from '../components/ProductGrid';
import { getMenSneakers } from '../services/apiSneakers';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import ErrorMessage from '../components/ErrorMessage';

function Men() {
  const {
    data: menSneakers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getMenSneakers,
  });

  console.log(menSneakers);

  if (isLoading) return <Spinner />;
  if (error)
    return <ErrorMessage>Sneakers could not be loaded 💥</ErrorMessage>;

  return (
    <StyledProductsGrid>
      {menSneakers.length === 0 ? (
        <ErrorMessage>No sneakers in stock...</ErrorMessage>
      ) : (
        menSneakers.map((sneaker) => (
          <ProductCard sneaker={sneaker} key={sneaker.id} />
        ))
      )}
    </StyledProductsGrid>
  );
}

export default Men;
