import { api } from '../../libs/api';

export const postChatbotPrompt = (
  chat,
  updateChatList,
  chatHistoryId,
  updateChatHistoryId,
) => {
  const requestData = {
    prompt: chat,
    ...(chatHistoryId !== -1 && { chatHistoryId }),
  };

  api
    .post('/api/chatbot/prompt', requestData, { withCredentials: true })
    .then((response) => {
      updateChatList((prevChatList) => [
        ...prevChatList,
        { role: 0, content: response.data.result.content },
      ]);

      if (chatHistoryId === -1) {
        updateChatHistoryId(response.data.result.chatHistoryId);
      }
    });
};
