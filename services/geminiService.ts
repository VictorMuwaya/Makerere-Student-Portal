
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getStudyAdvice(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a student at Makerere University studying ${topic}. Can you provide 3 quick study tips? Mention something encouraging related to the MUK motto 'We Build for the Future'. Keep it concise.`,
        config: {
          systemInstruction: "You are the Makerere University AI Academic Advisor. You are helpful, professional, and knowledgeable about the Ugandan higher education landscape.",
        }
      });
      return response.text || "I'm sorry, I couldn't generate advice right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Unable to connect to your study assistant. Please check your connection.";
    }
  }

  async chatWithAssistant(message: string, history: {role: 'user' | 'model', text: string}[]): Promise<string> {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are the Makerere University AI Advisor. You help students with academic queries, career guidance, and campus navigation. Use a tone that is inspiring and reflects the prestige of Makerere."
        }
      });
      
      const response = await chat.sendMessage({ message });
      return response.text || "I'm listening, but I didn't catch that.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having a bit of trouble connecting to the university servers! Let's try again in a moment.";
    }
  }
}

export const geminiService = new GeminiService();
