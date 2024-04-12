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
      console.log(data);
      console.log(data.result);
      return data.result.content;
    });
};
