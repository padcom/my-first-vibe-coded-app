<template>
  <button class="md-button">{{ t('refreshQuote') }}</button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.md-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  padding: 0 16px;
  height: 36px;
  border: none;
  border-radius: 4px;
  background: #1565C0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .089em;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 1px 5px rgba(0,0,0,.12);
  transition: box-shadow .28s cubic-bezier(.4,0,.2,1), background .28s cubic-bezier(.4,0,.2,1);
}

.md-button:hover {
  background: #1976D2;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
}

.md-button:active {
  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
}
</style>
