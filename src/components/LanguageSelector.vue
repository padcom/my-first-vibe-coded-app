<template>
  <select class="lang-select" v-model="locale">
    <option value="pl">Polski</option>
    <option value="en">English</option>
    <option value="de">Deutsch</option>
    <option value="fr">Français</option>
    <option value="es">Español</option>
    <option value="it">Italiano</option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { locale } = useI18n()
</script>

<style scoped>
.lang-select {
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.4);
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
}

.lang-select option {
  color: #000;
}
</style>
