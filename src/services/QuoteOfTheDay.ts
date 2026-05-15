import type { Quote } from '../types/Quote'

export class QuoteOfTheDay {
  async fetchRandomQuote(): Promise<Quote> {
    const res = await fetch('/api/today')
    if (res.status !== 200) throw new Error(res.statusText)
    const data: Quote[] = await res.json()
    return data[0]
  }
}
