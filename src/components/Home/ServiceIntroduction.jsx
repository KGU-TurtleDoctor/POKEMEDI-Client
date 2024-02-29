import styled, { keyframes } from 'styled-components';
import back1 from '../../assets/img/background1.jpeg';
import back2 from '../../assets/img/background2.jpeg';

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
        <FirstServiceImage src={back1} />
        <SecondServiceImage src={back2} />
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
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.3;

  transition-delay: 1.2s;
  animation: ${fadeup} 1s ease;
`;

const ServiceIntroSubMessage = styled.h2`
  margin-top: 2rem;

  font-size: 2.2rem;
  font-weight: 500;
  color: #8898a7;

  opacity: 0; /* 초기에는 숨김 */
  animation: ${fadeup} 0.8s ease forwards; /* forwards 옵션은 애니메이션 종료 후 상태를 유지하도록 합니다. */
  animation-delay: 0.8s;
`;

const ServiceImageContainer = styled.div`
  position: relative;

  width: 75rem;
  height: 39rem;
  margin-top: 7rem;
`;

const FirstServiceImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 50rem;
  height: 32rem;

  border-radius: 1.2rem;

  opacity: 0; /* 초기에는 숨김 */
  animation: ${fadein} 0.8s ease forwards; /* forwards 옵션은 애니메이션 종료 후 상태를 유지하도록 합니다. */
  animation-delay: 1.5s;
`;

const SecondServiceImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  width: 50rem;
  height: 32rem;

  border-radius: 1.2rem;

  opacity: 0; /* 초기에는 숨김 */
  animation: ${fadein} 0.8s ease forwards; /* forwards 옵션은 애니메이션 종료 후 상태를 유지하도록 합니다. */
  animation-delay: 2.3s;
`;

const GIFIMG = styled.img`
  width: 32rem;
  height: 24rem;
`;
