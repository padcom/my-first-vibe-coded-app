import { ref, onMounted } from 'vue'

interface Quote {
  q: string
  a: string
}

export function useQuoteOfTheDay() {
  const quote = ref<Quote | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function refresh() {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/today')
      if (res.status !== 200) throw new Error(res.statusText)
      const data: Quote[] = await res.json()
      quote.value = data[0]
    } catch (e) {
      const msg = (e as Error).message
      error.value = msg
    } finally {
      loading.value = false
    }
  }

  onMounted(refresh)

  return { quote, loading, error, refresh }
}
