import { PiHeartStraightBold } from 'react-icons/pi';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50rem;
  width: 35rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
`;

const ProductImageWrapper = styled.div`
  height: 75%;
  margin: 1.5rem 1.5rem 0 1.5rem;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const WishlistButton = styled.button`
  height: 4.2rem;
  border: none;
  background: #ffffff60;
  border-radius: var(--border-radius-sm);
  padding: 5px 10px;
  cursor: pointer;
  align-self: flex-end;
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
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);

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

const TextFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;
const ProductTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
`;
const ProductPrice = styled.p`
  font-size: 1.5rem;
  text-align: left;
`;

function ProductCard({ sneaker }) {
  const { modelName, regularPrice, image } = sneaker;

  return (
    <StyledProductCard>
      <ProductImageWrapper>
        <ProductImage src={image} />
      </ProductImageWrapper>
      <FlexInfo>
        <TextFlexContainer>
          <ProductTitle>{modelName}</ProductTitle>
          <ProductPrice>Price: ${regularPrice}</ProductPrice>
          <ButtonAddToCart>Add to Cart</ButtonAddToCart>
        </TextFlexContainer>
        <WishlistButton>
          <Icon />
        </WishlistButton>
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
