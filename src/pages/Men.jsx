import StyledProductsGrid from '../components/ProductGrid';

function Men() {
  const { data: menSneakers, isLoading, error } = useMen;
  return <StyledProductsGrid>{}</StyledProductsGrid>;
}

export default Men;
