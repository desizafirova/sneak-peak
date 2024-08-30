import styled from 'styled-components';

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
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

function Hero() {
  return (
    <StyledHero>
      <Video autoPlay muted loop>
        <source src="../../public/hero.mp4" type="video/mp4" />
      </Video>
    </StyledHero>
  );
}

export default Hero;
