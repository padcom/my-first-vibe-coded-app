<template>
  <div class="imageWrap">
    <div v-if="loading" class="spinner" />
    <div class="card" :class="{ hidden: loading }">
      <img :src="imageUrl" class="image" @load="loading = false" @error="loading = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const seed = ref(Math.floor(Math.random() * 1000))
const loading = ref(true)

const imageUrl = computed(() => `https://picsum.photos/seed/${seed.value}/800/400`)

function refresh() {
  loading.value = true
  seed.value = Math.floor(Math.random() * 1000)
}

defineExpose({ refresh })
</script>

<style scoped>
.imageWrap {
  max-width: 800px;
  margin: 18px auto 0;
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

.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0,0,0,.14), 0 3px 1px rgba(0,0,0,.12), 0 1px 5px rgba(0,0,0,.2);
  overflow: hidden;
}

.card.hidden {
  display: none;
}

.image {
  width: 100%;
  display: block;
}
</style>
