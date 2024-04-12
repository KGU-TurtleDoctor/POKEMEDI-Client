import { api } from '../../libs/api';

export const postChatbotPrompt = (chat) => {
  api
    .post('/api/chatbot/prompt', {
      prompt: chat,
    })
    .then((data) => {
      return data.result.content;
    });
};
