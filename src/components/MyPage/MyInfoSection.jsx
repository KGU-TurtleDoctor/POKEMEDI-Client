import styled from 'styled-components';
import ImgUser from '../../assets/img/img_user.png';

function MyInfoSection() {
  return (
    <MyInfoSectionWrapper>
      <UserImg src={ImgUser} />
      <UserInfoContainer>
        <UserName>이정우</UserName>
        <UserRole>* 일반회원</UserRole>
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
  width: 15rem;
  height: 15rem;
`;

const UserName = styled.h1`
  font-size: 4.3rem;
  font-weight: 600;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 2rem;

  height: 100%;
  margin-left: 5rem;
`;

const UserRole = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;

  color: #777;
`;
