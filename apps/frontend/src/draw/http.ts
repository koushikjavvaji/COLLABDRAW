import { HTTP_BACKEND } from "../config";
import axios from "axios";

export async function getExistingShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND}/room/get-chats/${roomId}`);

  const messages = res?.data?.messages || []; // Ensure it's an array

  if (!Array.isArray(messages)) {
    console.error("Error: messages is not an array", res.data);
    return [];
  }

  const shapes = messages.map((x: { message: string }) => {
    try {
      const messageData = JSON.parse(x.message);
      return messageData.shape;
    } catch (error) {
      console.error("JSON Parse Error:", error, x.message);
      return null; // Handle invalid JSON gracefully
    }
  });

  return shapes.filter((shape) => shape !== null); // Remove invalid entries
}
