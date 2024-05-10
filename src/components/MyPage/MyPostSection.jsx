import React from 'react';
import styled from 'styled-components';
import ListItem from '../CommunityList/ListItem';

function MyPostSection() {
  return (
    <MyPostSectionWrapper>
      <SectionTitle>내가 쓴 글</SectionTitle>
      <ListItem />
    </MyPostSectionWrapper>
  );
}

export default MyPostSection;

const MyPostSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  width: 100%;
  height: 15rem;
  margin-top: 7rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
`;
