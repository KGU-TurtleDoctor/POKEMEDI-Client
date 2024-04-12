import { api } from '../../libs/api';

export const postChatbotPrompt = (chat) => {
  api
    .post(
      '/api/chatbot/prompt',
      {
        prompt: chat,
      },
      { withCredentials: true },
    )
    .then((data) => {
      return data.data.result.content;
    });
};
