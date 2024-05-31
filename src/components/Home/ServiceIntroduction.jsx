import styled, { keyframes } from 'styled-components';
import ImgFirstService from '../../assets/img/img_first_service.png';
import ImgSecondService from '../../assets/img/img_second_service.png';

function ServiceIntroduction() {
  return (
    <ServiceintroductionWrapper>
      <ServiceIntroMessage>
        내 손 안의 의사
        <br />
        POKEMEDI
      </ServiceIntroMessage>
      <ServiceIntroSubMessage>
        집에서도 편리하게, 포켓메디와 함께
      </ServiceIntroSubMessage>
      <ServiceImageContainer>
        <FirstServiceImage src={ImgFirstService} />
        <SecondServiceImage src={ImgSecondService} />
      </ServiceImageContainer>
    </ServiceintroductionWrapper>
  );
}

export default ServiceIntroduction;

const ServiceintroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  text-align: center;
`;

const fadeup = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ServiceIntroMessage = styled.h1`
  font-size: 6.875rem;
  font-weight: 700;
  line-height: 1.3;

  transition-delay: 1.2s;
  animation: ${fadeup} 1s ease;
`;

const ServiceIntroSubMessage = styled.h2`
  margin-top: 2.5rem;

  font-size: 2.75rem;
  font-weight: 500;
  color: #8898a7;

  opacity: 0;
  animation: ${fadeup} 0.8s ease forwards;
  animation-delay: 0.8s;
`;

const ServiceImageContainer = styled.div`
  position: relative;

  width: 93.75rem;
  height: 48.75rem;
  margin-top: 8.75rem;
`;

const FirstServiceImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 62.5rem;
  height: 40rem;

  border-radius: 1.5rem;

  opacity: 0;
  animation: ${fadein} 0.8s ease forwards;
  animation-delay: 1.5s;

  object-fit: cover;
`;

const SecondServiceImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  width: 62.5rem;
  height: 40rem;

  border-radius: 1.5rem;

  opacity: 0;
  animation: ${fadein} 0.8s ease forwards;
  animation-delay: 2.3s;

  object-fit: cover;
`;
