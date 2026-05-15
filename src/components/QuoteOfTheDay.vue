<template>
  <div class="quoteWrap">
    <div v-if="loading" class="spinner" />
    <div v-else-if="error" class="alert">{{ error }}</div>
    <div v-else-if="quote" class="card">
      <div class="cardText">
        <p class="quoteText">"{{ quote.q }}"</p>
      </div>
      <div class="cardSubtitle">— {{ quote.a }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuoteOfTheDay } from '../composables/useQuoteOfTheDay'

const { quote, loading, error, refresh } = useQuoteOfTheDay()

defineExpose({ refresh })
</script>

<style scoped>
.quoteWrap {
  max-width: 600px;
  margin: 0 auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(21,101,192,.2);
  border-top-color: #1565C0;
  border-radius: 50%;
  animation: spin .8s linear infinite;
  margin: 48px auto;
}

.alert {
  background: #FFEBEE;
  color: #B71C1C;
  border: 1px solid #EF9A9A;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
}

.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0,0,0,.14), 0 3px 1px rgba(0,0,0,.12), 0 1px 5px rgba(0,0,0,.2);
}

.cardText {
  padding: 16px;
}

.quoteText {
  font-family: 'UnifrakturMaguntia', cursive;
  font-size: 24px;
  line-height: 1.6;
  color: #212121;
}

.cardSubtitle {
  padding: 0 16px 16px;
  font-size: 14px;
  color: #757575;
}
</style>
