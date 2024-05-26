import { api } from '../../libs/api';

export const getChatHistory = (updateChatList, chatHistoryId) => {
  api
    .get(`/api/chatbot/chathistories/${chatHistoryId}/chattexts`, {
      withCredentials: true,
    })
    .then((response) => {
      updateChatList(response.data.result);
    });
};
