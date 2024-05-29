import { api } from '../../libs/api';

export const getChatHistory = (updateChatList, chatHistoryId) => {
  api
    .get(`/api/chatbot/chathistories/${chatHistoryId}/chattexts`, {
      withCredentials: true,
    })
    .then((response) => {
      updateChatList([
        {
          role: 0,
          content: '안녕하세요! 포켓메디입니다.\n무엇을 도와드릴까요?',
        },
        ...response.data.result,
      ]);
    });
};
