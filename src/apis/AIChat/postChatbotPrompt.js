import { api } from '../../libs/api';

export const postChatbotPrompt = (chat, updateChatList) => {
  api
    .post(
      '/api/chatbot/prompt',
      {
        prompt: chat,
      },
      { withCredentials: true },
    )
    .then((data) => {
      updateChatList(data.data.result.updateChatList);
    });
};
