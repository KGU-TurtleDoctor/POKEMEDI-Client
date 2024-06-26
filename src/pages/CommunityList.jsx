import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcSearch } from '../assets/svg/icon';
import Header from '../components/Common/Header';
import ListItem from '../components/CommunityList/ListItem';
import { api } from '../libs/api';
import Loading from './Loading';

function CommunityList() {
  const navigate = useNavigate();
  const [list, setList] = useState();
  const [nickname, setNickname] = useState();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    api.get('/api/isLogin').then(() => {
      api.get('/api/info', { withCredentials: true }).then((res) => {
        sessionStorage.setItem('name', res.data.result.name);
        setNickname(res.data.result.name);
      });
    });

    api
      .get('api/community/list', { withCredentials: true })
      .then((res) => {
        if (Array.isArray(res.data.result)) {
          setList(res.data.result);
        }
      })
      .catch(() => {
        navigate('/login-error');
      });
  }, []);

  const handleChangeSearchInput = (e) => {
    setSearchText(e.target.value);
  };

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
    if (e.key === 'Enter') {
      getSearchList();
    }
  };

  const handleClickWritingButton = () => {
    navigate('/community-post');
  };

  if (!list) {
    return <Loading />;
  }

  return (
    <CommunityListWrapper onKeyDown={handlePressEnterKey}>
      <Header nickname={nickname} />
      <CommunityListBodyWrapper>
        <CommunityListBoxWrapper>
          <SearchBox>
            <StyledIcSearch />
            <SearchInput
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={handleChangeSearchInput}
              value={searchText}
            />
          </SearchBox>
          <WritingBox>
            <WritingButton onClick={handleClickWritingButton}>
              글쓰기
            </WritingButton>
          </WritingBox>
          {list.map((item) => {
            return (
              <ListItem
                key={item.id}
                {...item}
                updateList={(list) => setList(list)}
              />
            );
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
  min-height: calc(100vh - 8rem);
  padding: 0 calc((100% - 81.2rem) / 2);
  margin-top: 8rem;

  background-color: #f1f5f9;

  display: flex;
  justify-content: center;
`;

const CommunityListBoxWrapper = styled.div`
  width: 81.2rem;
  min-height: calc(100vh - 8rem);
  padding: 5rem 10rem;

  background-color: white;
  font-size: 2rem;
  font-family: Pretendard;

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
  font-weight: 500;
  font-family: Pretendard;
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
  font-family: Pretendard;

  background-color: #04293f;
  color: white;
`;
