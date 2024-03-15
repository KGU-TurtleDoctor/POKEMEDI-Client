import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MenuBox from './MenuBox';

function MenuIntroduction() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bottom1 = menuRef1.current.getBoundingClientRect().top;
      const bottom2 = menuRef2.current.getBoundingClientRect().top;

      setIsVisible1(bottom1 < window.innerHeight + 200);
      setIsVisible2(bottom2 < window.innerHeight + 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MenuIntroductionWrapper>
      <MenuBox ref={menuRef1} isVisible={isVisible1} type={1} />
      <MenuBox ref={menuRef2} isVisible={isVisible2} type={2} />
    </MenuIntroductionWrapper>
  );
}

export default MenuIntroduction;

const MenuIntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10rem;

  width: 100%;
  margin-top: 18.75rem;
  padding-bottom: 18.75rem;
`;
