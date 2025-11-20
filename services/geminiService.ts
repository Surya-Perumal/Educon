import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCareerAdvice = async (query: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the full conversation history including system instruction context
    const systemInstruction = `You are "EduBot", a friendly, encouraging, and expert education consultant for "EduVantage". 
    Your goal is to help students and professionals find the right educational path, university, or career trajectory.
    Keep answers concise (under 150 words unless asked for details), professional yet warm, and strictly related to education, career growth, and university admissions.
    If asked about services, mention that EduVantage offers University Admissions, Career Counseling, and Test Prep.`;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history // Pass previous context if needed for a multi-turn chat
    });

    const result = await chat.sendMessage({
      message: query
    });

    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get advice. Please try again later.");
  }
};