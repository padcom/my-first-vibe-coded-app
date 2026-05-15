import { ref, onMounted } from 'vue'
import type { Quote } from '../types/Quote'
import { QuoteOfTheDay } from '../services/QuoteOfTheDay'

const service = new QuoteOfTheDay()

export function useQuoteOfTheDay() {
  const quote = ref<Quote | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      quote.value = await service.fetchRandomQuote()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { quote, loading, error, refresh }
}
