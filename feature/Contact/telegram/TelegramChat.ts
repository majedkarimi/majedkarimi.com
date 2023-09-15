const telegramChat = (message: string) => {
  const telegramBotToken = "6304025097:AAEY41sBO9m7Rdo2INLdesafvaEcGsyLjik";
  const chatId = "2001317160"; // The recipient's chat ID (you need to obtain this)
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
