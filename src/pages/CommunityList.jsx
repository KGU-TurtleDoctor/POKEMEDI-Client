import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import ListItem from '../components/CommunityList/ListItem';
import { api } from '../libs/api';
import { IcSearch } from '../assets/svg/icon';

function CommunityList() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const [searchText, setSearchText] = useState(''); // 1

  useEffect(() => {
    api.get('api/community/list', { withCredentials: true }).then((res) => {
      console.log(res);
      if (Array.isArray(res.data.result)) {
        setList(res.data.result);
      }
    });
  }, []);

  const handleChangeSearchInput = (e) => {
    setSearchText(e.target.value);
  }; // 2

  const getSearchList = () => {
    api
      .get(`api/community/search/${searchText}`, { withCredentials: true })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setList(res.data.result);
        }
      });
  };

  const handlePressEnterKey = (e) => {
    if (e.key === 'Enter' && searchText.length !== 0) {
      getSearchList();
    }
  };

  const handleClickWritingButton = () => {
    navigate('/community-post');
  };

  return (
    <CommunityListWrapper onKeyDown={handlePressEnterKey}>
      <Header />
      <CommunityListBodyWrapper>
        <CommunityListBoxWrapper>
          <SearchBox>
            <StyledIcSearch />
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={handleChangeSearchInput}
              value={searchText}
            />{' '}
          </SearchBox>
          <WritingBox>
            <WritingButton onClick={handleClickWritingButton}>
              글쓰기
            </WritingButton>
          </WritingBox>
          {list.map((item) => {
            return <ListItem key={item.id} {...item} />;
          })}
        </CommunityListBoxWrapper>
      </CommunityListBodyWrapper>
    </CommunityListWrapper>
  );
}

export default CommunityList;

const CommunityListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CommunityListBodyWrapper = styled.div`
  width: 100%;

  padding: 0 37.5rem;
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const CommunityListBoxWrapper = styled.div`
  width: calc(100vw - 75rem);
  min-height: calc(100vh - 8rem);
  padding: 10rem 20rem 10rem 20rem;

  background-color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 5.2rem;

  background-color: #f1f5f9;
  border-radius: 2rem;
  border: 0.05rem solid #9e9e9e;

  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

const StyledIcSearch = styled(IcSearch)`
  width: 2.5rem;
  height: 2.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 4rem;

  background-color: #f1f5f9;
  border: none;
  font-size: 2rem;
  border-radius: 2rem;
`;

const WritingBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WritingButton = styled.button`
  width: 8.75rem;
  height: 3.75rem;

  border-radius: 0.7rem;

  font-size: 1.75rem;
  font-weight: 500;

  background-color: #04293f;
  color: white;
`;
