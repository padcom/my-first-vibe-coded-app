<template>
  <div class="quote-wrap">
    <div v-if="loading" class="spinner" />
    <div v-else-if="error" class="alert">{{ error }}</div>
    <div v-else-if="quote" class="card">
      <div class="card-text">
        <p class="quote-text">"{{ quote.q }}"</p>
      </div>
      <div class="card-footer">
        <span class="card-subtitle">— {{ quote.a }}</span>
        <button class="fav-btn" :class="{ active: isFavorite(quote) }" @click="toggle(quote)">♥</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuoteOfTheDay } from '../composables/useQuoteOfTheDay'
import { useFavorites } from '../composables/useFavorites'

const { quote, loading, error, refresh } = useQuoteOfTheDay()
const { isFavorite, toggle } = useFavorites()

defineExpose({ refresh })
</script>

<style scoped>
.quote-wrap {
  max-width: 600px;
  margin: 0 auto;
}

.alert {
  background: #FFEBEE;
  color: #B71C1C;
  border: 1px solid #EF9A9A;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
}

.card-text {
  padding: 16px;
}

.quote-text {
  font-family: 'UnifrakturMaguntia', cursive;
  font-size: 24px;
  line-height: 1.6;
  color: #212121;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 8px 16px;
}

.card-subtitle {
  font-size: 14px;
  color: #757575;
}

.fav-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #ccc;
  padding: 4px 8px;
  border-radius: 50%;
  transition: color .2s, background .2s;
}

.fav-btn:hover { background: rgba(0,0,0,.06); }
.fav-btn.active { color: #e53935; }
</style>
