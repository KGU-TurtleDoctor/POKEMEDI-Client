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
      {myPost.length === 0 ? (
        <EmptyTextSection>
          <EmptyText>최근 작성한 글이 없습니다.</EmptyText>
        </EmptyTextSection>
      ) : (
        <React.Fragment>
          <PostItem {...myPost[0]} />
          <MoreButtonContainer>
            {myPost.length > 1 && (
              <MoreButton onClick={() => navigate('/mypost-list')}>
                <StyledIcMore />
                더보기
              </MoreButton>
            )}
          </MoreButtonContainer>
        </React.Fragment>
      )}
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
  font-family: Pretendard;

  margin-bottom: 2rem;
`;

const EmptyTextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 15rem;
`;

const EmptyText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-family: Pretendard;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 3.6rem;
  padding: 0 1rem;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  width: 6.3rem;
  margin-top: 1.5rem;

  font-size: 1.5rem;
  font-family: Pretendard;

  border-bottom: 0.1rem solid black;
`;

const StyledIcMore = styled(IcMore)`
  width: 2rem;
  height: 2rem;
`;
