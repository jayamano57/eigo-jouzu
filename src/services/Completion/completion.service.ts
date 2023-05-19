import { aiService } from '../AI/ai.service'
import { AIService } from '../AI/ai.types'

export class CompletionServiceImpl {
  constructor(private aiService: AIService) {}

  async complete(message: string): Promise<string> {
    const response = await this.aiService.completion(message)
    const result = await response.json()

    if (result.choices?.length === 0)
      throw new Error(
        'The input prompt did not yield any results. Try a different prompt.'
      )

    return result.choices[0].text.trim() as string
  }
}

export const completionService = new CompletionServiceImpl(aiService)
