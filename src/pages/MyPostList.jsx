import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import PostItem from '../components/MyPostList/PostItem';
import { api } from '../libs/api';
import Loading from './Loading';

function MyPostList() {
  const [myList, setMyList] = useState();

  useEffect(() => {
    api
      .get('api/community/myPostList', { withCredentials: true })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setMyList(res.data.result);
        }
      });
  }, []);

  if (!myList) {
    return <Loading />;
  }

  return (
    <MyPostListWrapper>
      <Header />
      <MyPostListBodyWrapper>
        <MyPostListBoxWrapper>
          <MyListBox>
            <MyListTitle>내가 작성한 글</MyListTitle>
          </MyListBox>
          <MyPostListItemContainer>
            {myList.map((item) => {
              return (
                <PostItem
                  key={item.id}
                  {...item}
                  updateList={(list) => setMyList(list)}
                />
              );
            })}
          </MyPostListItemContainer>
        </MyPostListBoxWrapper>
      </MyPostListBodyWrapper>
    </MyPostListWrapper>
  );
}

export default MyPostList;

const MyPostListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MyPostListBodyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const MyPostListBoxWrapper = styled.div`
  width: 81.2rem;
  min-height: calc(100vh - 8rem);
  padding: 10rem;

  background-color: white;
  font-size: 2rem;
  font-family: Pretendard;

  display: flex;
  flex-direction: column;
`;
const MyPostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MyListBox = styled.div`
  width: 100%;
  height: 5.2rem;

  display: flex;
  align-items: center;
`;

const MyListTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  font-family: Pretendard;
  color: black;

  margin-bottom: 5.5rem;
`;
