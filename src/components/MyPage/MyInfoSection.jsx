import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImgUser from '../../assets/img/img_user.png';
import { api } from '../../libs/api';

function MyInfoSection() {
  const navigate = useNavigate();

  const handleClickLogoutButton = () => {
    api.post('/logout', { withCredentials: true }).then((res) => {
      navigate('/');
    });
  };

  return (
    <MyInfoSectionWrapper>
      <UserImg src={ImgUser} />
      <UserInfoContainer>
        <UserName>{sessionStorage.getItem('name')}</UserName>
        <BottomContainer>
          <UserRole>* 일반회원</UserRole>
          <LogoutButton onClick={handleClickLogoutButton}>
            로그아웃
          </LogoutButton>
        </BottomContainer>
      </UserInfoContainer>
    </MyInfoSectionWrapper>
  );
}

export default MyInfoSection;

const MyInfoSectionWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 15rem;
`;

const UserImg = styled.img`
  width: 13rem;
  height: 13rem;
`;

const UserName = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  font-family: Pretendard;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 2rem;

  height: 100%;
  margin-left: 5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  column-gap: 5rem;
  align-items: center;
`;

const UserRole = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
  font-family: Pretendard;

  color: #777;
`;

const LogoutButton = styled.button`
  width: 8rem;
  height: 3rem;

  border-radius: 0.7rem;

  font-size: 1.5rem;
  font-weight: 500;
  font-family: Pretendard;

  background-color: #04293f;
  color: white;
`;
