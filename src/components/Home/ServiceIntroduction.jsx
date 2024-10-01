import styled, { keyframes } from 'styled-components';
import ImgFirstService from '../../assets/img/img_first_service.png';
import ImgSecondService from '../../assets/img/img_second_service.png';
import { motion } from 'framer-motion';

const introMessageAnimation = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

const subMessageAnimation = {
  initial: { opacity: 0, y: '100%' },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.8 },
};

const firstImageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay: 1.5 },
};

const secondImageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay: 2.3 },
};

function ServiceIntroduction() {
  return (
    <ServiceintroductionWrapper>
      <ServiceIntroMessage {...introMessageAnimation}>
        내 손 안의 의사
        <br />
        POKEMEDI
      </ServiceIntroMessage>
      <ServiceIntroSubMessage {...subMessageAnimation}>
        집에서도 편리하게, 포켓메디와 함께
      </ServiceIntroSubMessage>
      <ServiceImageContainer>
        <FirstServiceImage src={ImgFirstService} {...firstImageAnimation} />
        <SecondServiceImage src={ImgSecondService} {...secondImageAnimation} />
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

const ServiceIntroMessage = styled(motion.h1)`
  font-size: 6.875rem;
  font-weight: 600;
  font-family: Pretendard;
  line-height: 1.3;
`;

const ServiceIntroSubMessage = styled(motion.h2)`
  margin-top: 2.5rem;

  font-size: 2.75rem;
  font-weight: 500;
  font-family: Pretendard;
  color: #8898a7;
`;

const ServiceImageContainer = styled.div`
  position: relative;

  width: 93.75rem;
  height: 48.75rem;
  margin-top: 8.75rem;
`;

const FirstServiceImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;

  width: 62.5rem;
  height: 40rem;

  border-radius: 1.5rem;
`;

const SecondServiceImage = styled(motion.img)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  width: 62.5rem;
  height: 40rem;

  border-radius: 1.5rem;
`;
