import axios from "axios";

const API_BASE_URL = "https://ai-chatbot-server-1-zpip.onrender.com/"; // Replace with your backend server URL

/**
 * Sends a message + conversation history to the backend and
 * returns the assistant's reply text.
 */
export async function sendMessage(message, history) {
  const response = await axios.post(`${API_BASE_URL}/chat`, {
    message,
    history,
  });
  return response.data.reply;
}
