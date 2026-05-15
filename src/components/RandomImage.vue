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

.card {
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
