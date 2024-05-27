import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcMore } from '../../assets/svg/icon';
import PostItem from '../MyPostList/PostItem';

function MyPostSection({ myPost }) {
  const navigate = useNavigate();

  return (
    <MyPostSectionWrapper>
      <SectionTitle>최근 작성 글</SectionTitle>
      <PostItem {...myPost} />
      <MoreButtonContainer>
        <MoreButton onClick={() => navigate('/mypost-list')}>
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
  margin-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;

  margin-bottom: 2rem;
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