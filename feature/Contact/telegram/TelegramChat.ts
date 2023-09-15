const telegramChat = (message: string) => {
  const telegramBotToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID"; // The recipient's chat ID (you need to obtain this)
  const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const formData = new URLSearchParams();
  formData.append("chat_id", chatId);
  formData.append("text", message);

  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from Telegram (e.g., check for success)
    })
    .catch((error) => {
      console.error("Error sending message Telegram:", error);
    });
};

export default telegramChat;
