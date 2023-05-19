export interface AIService {
  completion(message: string): Promise<any>
}
