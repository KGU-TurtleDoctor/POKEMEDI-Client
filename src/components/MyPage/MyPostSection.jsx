import React from 'react';
import styled from 'styled-components';
import { IcMore } from '../../assets/svg/icon';
import ListItem from '../CommunityList/ListItem';

function MyPostSection() {
  return (
    <MyPostSectionWrapper>
      <SectionTitle>내가 쓴 글</SectionTitle>
      <ListItem />
      <MoreButtonContainer>
        <MoreButton>
          <StyledIcMore />
          더보기
        </MoreButton>
      </MoreButtonContainer>
    </MyPostSectionWrapper>
  );
}

export default MyPostSection;

const MyPostSectionWrapper = styled.div`
  width: 100%;
  height: 15rem;
  margin-top: 7rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;

  margin-bottom: 3rem;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1rem;

  width: 100%;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  width: 6.3rem;
  margin-top: 1.5rem;

  font-size: 1.5rem;

  border-bottom: 0.1rem solid black;
`;

const StyledIcMore = styled(IcMore)`
  width: 2rem;
  height: 2rem;
`;
