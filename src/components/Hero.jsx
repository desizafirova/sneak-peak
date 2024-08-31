import styled from 'styled-components';
import Heading from './Heading';
import { useNavigate } from 'react-router-dom';

const StyledHero = styled.div`
  position: relative;
  height: 90vh;
  width: 100vw;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 2.4rem;
  height: 50%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeroText = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
`;

const Button = styled.button`
  background: var(--color-rose-500);
  color: var(--color-rose-100);
  border: none;
  border-radius: 3px;
  align-self: flex-start;
  padding: 1.2rem 2.4rem;

  &:hover {
    background-color: var(--color-rose-600);
  }
`;

function Hero() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/products');
  }

  return (
    <StyledHero>
      <Video autoPlay muted loop>
        <source src="/hero.mp4" type="video/mp4" />
      </Video>
      <HeroContent>
        <div>
          <Heading>
            Step into style, <br /> walk with confidence
          </Heading>
          <HeroText>
            &mdash; Discover the freshest sneaker drops and <br />
            exclusive styles. Your ultimate destination for the latest in
            sneaker culture.
          </HeroText>
        </div>
        <Button onClick={handleClick}>Discover Now</Button>
      </HeroContent>
    </StyledHero>
  );
}

export default Hero;
