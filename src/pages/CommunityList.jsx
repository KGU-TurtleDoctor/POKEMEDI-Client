import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import ListItem from '../components/CommunityList/ListItem';

const list = [
  {
    id: 1,
    title: '이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요',
    content:
      '이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요...어느 날, 봄의 햇살이 따사로운 날이었어요. 나는 이가 아파 병원에서 치료를 받고있었죠. 의사는 나에게 약을 주며, 절대 눈을 감고 먹지 말라했죠. 밖에 나와 햇살이 눈부셔 눈을 감은 찰나에 약을 먹자마자, 나는 떨어지는 느낌을 받았고, 어딘가로 날아갔어요. 그리고 내가 떨어진 곳은 이상한 나라였습니다. 이상한 나라에 도착한 나는 내가 본 적 없는 이상한 존재들, 특이한 건축물들을 보고말았죠.',
    nickname: '나는최고짱이숑',
    date: '2024.11.13 08:56',
  },
  {
    id: 2,
    title: '목이 아파서 병원에 왔는데 목각인형이 되었어요',
    content:
      '목이 아파서 병원에 왔는데 목각인형이 되었어요. 이게 가능한 일인가요? 저는 그냥 목이 칼칼하고 침 삼킬 때 따가워서 이비인후과에 간건데. 외형이 목각인형으로 변하면 저는 어떡하죠? 이런 경우 경험해보신 분 계시면 댓글 달아주세요ㅠㅠ',
    nickname: '낙서숑이숑',
    date: '2024.04.06 13:34',
  },
  {
    id: 3,
    title: '눈이 아파서 병원에 왔는데 이상한 나라로 떨어졌어요',
    content:
      ' 이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요...어느 날, 봄의 햇살이 따사로운 날이었어요. 나는 이가 아파 병원에서 치료를 받고있었죠. 의사는 나에게 약을 주며, 절대 눈을 감고 먹지 말라했죠. 밖에 나와 햇살이 눈부셔 눈을 감은 찰나에 약을 먹자마자, 나는 떨어지는 느낌을 받았고, 어딘가로 날아갔어요. 그리고 내가 떨어진 곳은 이상한 나라였습니다. 이상한 나라에 도착한 나는 내가 본 적 없는 이상한 존재들, 특이한 건축물들을 보고말았죠.',
    nickname: '나는최고짱이숑',
    date: '2024.11.13 08:56',
  },
  {
    id: 4,
    title: '이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요',
    content:
      ' 이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요...어느 날, 봄의 햇살이 따사로운 날이었어요. 나는 이가 아파 병원에서 치료를 받고있었죠. 의사는 나에게 약을 주며, 절대 눈을 감고 먹지 말라했죠. 밖에 나와 햇살이 눈부셔 눈을 감은 찰나에 약을 먹자마자, 나는 떨어지는 느낌을 받았고, 어딘가로 날아갔어요. 그리고 내가 떨어진 곳은 이상한 나라였습니다. 이상한 나라에 도착한 나는 내가 본 적 없는 이상한 존재들, 특이한 건축물들을 보고말았죠.',
    nickname: '나는최고짱이숑',
    date: '2024.11.13 08:56',
  },
  {
    id: 5,
    title: '이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요',
    content:
      ' 이가 아파서 병원에 왔는데 이상한 나라로 떨어졌어요...어느 날, 봄의 햇살이 따사로운 날이었어요. 나는 이가 아파 병원에서 치료를 받고있었죠. 의사는 나에게 약을 주며, 절대 눈을 감고 먹지 말라했죠. 밖에 나와 햇살이 눈부셔 눈을 감은 찰나에 약을 먹자마자, 나는 떨어지는 느낌을 받았고, 어딘가로 날아갔어요. 그리고 내가 떨어진 곳은 이상한 나라였습니다. 이상한 나라에 도착한 나는 내가 본 적 없는 이상한 존재들, 특이한 건축물들을 보고말았죠.',
    nickname: '나는최고짱이숑',
    date: '2024.11.13 08:56',
  },
];

function CommunityList() {
  return (
    <CommunityListWrapper>
      <Header />
      <CommunityListBodyWrapper>
        <CommunityListBoxWrapper>
          <div>게시글 목록</div>

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
