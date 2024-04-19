import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import ListItem from '../components/CommunityList/ListItem';
import axios from 'axios';
import { api } from '../libs/api';
import { IcSearch } from '../assets/svg/icon';

function CommunityList() {
  const [list, setList] = useState([]);

  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    api.get('api/community/list', { withCredentials: true }).then((res) => {
      setList([]);
    });
  }, []);

  const handleChangeInput = (e) => {
    setSearchText(e.target.value);
  };

  console.log(searchText);

  return (
    <CommunityListWrapper>
      <Header />
      <CommunityListBodyWrapper>
        <CommunityListBoxWrapper>
          <SearchBox>
            <StyledIcSearch />
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={handleChangeInput}
              value={searchText}
            />
          </SearchBox>
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
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 0 37.5rem;
  margin-top: 8rem;

  background-color: #f1f5f9;
`;

const CommunityListBoxWrapper = styled.div`
  width: calc(100vw - 75rem);
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
  border: 1px solid grey;

  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  margin-bottom: 3rem;
`;

const StyledIcSearch = styled(IcSearch)`
  width: 2.5rem;
  height: 2.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 5rem;

  background-color: #f1f5f9;
  border: none;
  font-size: 2rem;
  border-radius: 2rem;
`;
