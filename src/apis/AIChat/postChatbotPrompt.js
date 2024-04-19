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
    .then((response) => {
      const chatbotResponse = response.data.result.content;

      updateChatList((prevChatList) => [
        ...prevChatList,
        { id: 2, text: chatbotResponse },
      ]);
    });
};
