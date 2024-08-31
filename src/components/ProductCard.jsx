import { PiHeartStraightBold } from 'react-icons/pi';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSneakers } from '../hooks/useSneakers';
import Spinner from './Spinner';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50rem;
  width: 40rem;
  background-color: var(--color-grey-50);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  position: relative;
`;

const ProductImage = styled.img`
  height: 85%;
  object-fit: cover;
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 4.2rem;
  border: none;
  background: #ffffff60;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const Icon = styled(PiHeartStraightBold)`
  font-size: 3.2rem;
  &:hover {
    color: var(--color-grey-900);
  }
`;

const ButtonAddToCart = styled.button`
  border: none;
  color: var(--color-grey-100);
  background-color: var(--color-grey-700);
  padding: 1.2rem 2.4rem;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const FlexInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

function ProductCard({ sneaker }) {
  const { modelName, regularPrice, image } = sneaker;
  const { isLoading } = useSneakers();

  if (isLoading) return <Spinner />;

  return (
    <StyledProductCard>
      <ProductImage src={image} />
      <WishlistButton>
        <Icon />
      </WishlistButton>
      <FlexInfo>
        <div>
          <p>{modelName}</p>
          <p>Price: ${regularPrice}</p>
        </div>
        <ButtonAddToCart>Add to Cart</ButtonAddToCart>
      </FlexInfo>
    </StyledProductCard>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  sneaker: PropTypes.shape({
    modelName: PropTypes.string.isRequired,
    regularPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
