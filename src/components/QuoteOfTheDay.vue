<template>
  <div class="quote-wrap">
    <div v-if="loading" class="spinner" />
    <div v-else-if="error" class="alert">{{ error }}</div>
    <div v-else-if="quote" class="card">
      <div class="card-text">
        <p class="quote-text">"{{ quote.q }}"</p>
      </div>
      <div class="card-subtitle">— {{ quote.a }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuoteOfTheDay } from '../composables/useQuoteOfTheDay'

const { quote, loading, error, refresh } = useQuoteOfTheDay()

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

.card-subtitle {
  padding: 0 16px 16px;
  font-size: 14px;
  color: #757575;
}
</style>
