<template>
  <div class="app">
    <header class="appBar">
      <button class="navIcon" @click="drawer = !drawer">&#9776;</button>
      <span class="appBarTitle">{{ t('appTitle') }}</span>
      <LanguageSelector />
    </header>
    <div class="layout">
      <aside v-if="drawer" class="sidebar sidebarLeft">
        <div class="sidebarTitle">{{ t('navigation') }}</div>
        <hr class="divider" />
      </aside>
      <main class="content">
        <QuoteOfTheDay ref="quoteRef" />
        <RandomImage />
      </main>
      <aside v-if="drawer" class="sidebar sidebarRight">
        <div class="sidebarTitle">{{ t('details') }}</div>
        <hr class="divider" />
        <RefreshQuoteButton @click="quoteRef?.refresh()" />
      </aside>
    </div>
    <footer class="footer">
      <span>{{ t('footer') }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69" class="footerLogo">
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" />
      </svg>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted, onUnmounted } from 'vue'
import { useI18n } from './i18n'
import LanguageSelector from './components/LanguageSelector.vue'
import QuoteOfTheDay from './components/QuoteOfTheDay.vue'
import RefreshQuoteButton from './components/RefreshQuoteButton.vue'
import RandomImage from './components/RandomImage.vue'

const { t } = useI18n()
watchEffect(() => { document.title = t('appTitle') })

const drawer = ref(true)
const quoteRef = ref<{ refresh: () => void } | null>(null)

function onKeydown(e: KeyboardEvent) {
  if (e.ctrlKey && e.key === 'x') drawer.value = !drawer.value
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.appBar {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 64px;
  padding: 0 16px;
  background: #1565C0;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.15);
  flex-shrink: 0;
}

.navIcon {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navIcon:hover { background: rgba(255,255,255,.1); }

.appBarTitle {
  flex: 1;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .005em;
}

.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 256px;
  background: #fff;
  flex-shrink: 0;
  overflow-y: auto;
}

.sidebarLeft { border-right: 1px solid rgba(0,0,0,.12); }
.sidebarRight { border-left: 1px solid rgba(0,0,0,.12); }

.sidebarTitle {
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #212121;
}

.divider {
  border: none;
  border-top: 1px solid rgba(0,0,0,.12);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.footer {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 2em;
  font-size: 13px;
  color: #757575;
  border-top: 1px solid rgba(0,0,0,.12);
  background: #fff;
  flex-shrink: 0;
}

.footerLogo {
  height: 24px;
  width: auto;
}
</style>
