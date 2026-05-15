import { ref } from 'vue'

export interface Quote {
  q: string
  a: string
}

const STORAGE_KEY = 'favorite-quotes'

function load(): Quote[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

const favorites = ref<Quote[]>(load())

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
}

export function useFavorites() {
  function isFavorite(quote: Quote) {
    return favorites.value.some(f => f.q === quote.q && f.a === quote.a)
  }

  function toggle(quote: Quote) {
    if (isFavorite(quote)) {
      favorites.value = favorites.value.filter(f => !(f.q === quote.q && f.a === quote.a))
    } else {
      favorites.value = [...favorites.value, quote]
    }
    save()
  }

  return { favorites, isFavorite, toggle }
}
