import { AIService } from './ai.types'

export class AIServiceImpl implements AIService {
  constructor(private baseUrl = 'https://api.openai.com/v1/') {}

  async completion(message: string, emojis?: false): Promise<unknown> {
    const prompt = `Proofread the following text message to a friend. If there are any Japanese words or phrases in the message, translate them to English first. Fix all spelling errors and grammar mistakes, and use friendly language. Do not put the outputted message in quotes.${
      emojis
        ? ' If it makes sense, you can one emoji in the message. The emoji can be either 😁, 💖, or 👍.'
        : ''
    }\n\n"${message}"`
    return fetch(`${this.baseUrl}/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        temperature: 0,
        max_tokens: 1000,
        prompt,
      }),
    })
  }
}

export const aiService = new AIServiceImpl()
