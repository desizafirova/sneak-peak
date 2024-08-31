import { useQuery } from '@tanstack/react-query';
import { getWomenSneakers } from '../services/apiSneakers';
import StyledProductsGrid from '../components/ProductGrid';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

function Women() {
  const {
    isLoading,
    data: womenSneakers,
    error,
  } = useQuery({
    queryKey: ['womenSneakers'],
    queryFn: getWomenSneakers,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return <ErrorMessage>Sneakers could not be loaded 💥</ErrorMessage>;

  return (
    <StyledProductsGrid>
      {womenSneakers.length === 0 ? (
        <ErrorMessage>No sneakers in stock...</ErrorMessage>
      ) : (
        womenSneakers.map((sneaker) => (
          <ProductCard sneaker={sneaker} key={sneaker.id} />
        ))
      )}
    </StyledProductsGrid>
  );
}

export default Women;
