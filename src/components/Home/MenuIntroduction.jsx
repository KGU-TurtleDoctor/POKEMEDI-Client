import React from 'react';
import styled from 'styled-components';
import MenuBox from './MenuBox';

function MenuIntroduction() {
  return (
    <MenuIntroductionWrapper>
      <MenuBox type={1} />
      <MenuBox type={2} />
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
