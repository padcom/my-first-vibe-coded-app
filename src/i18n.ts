import { ref } from 'vue'

type Locale = 'pl' | 'en' | 'de' | 'fr' | 'es' | 'it'

type Messages = {
  appTitle: string
  navigation: string
  details: string
  footer: string
  refreshQuote: string
}

const messages: Record<Locale, Messages> = {
  pl: { appTitle: 'Cytat dnia', navigation: 'Nawigacja', details: 'Szczegóły', footer: 'Moja pierwsza wajbowa aplikacja', refreshQuote: 'Odśwież cytat' },
  en: { appTitle: 'Quote of the Day', navigation: 'Navigation', details: 'Details', footer: 'My first Vue application', refreshQuote: 'Refresh quote' },
  de: { appTitle: 'Zitat des Tages', navigation: 'Navigation', details: 'Details', footer: 'Meine erste Vue-Anwendung', refreshQuote: 'Zitat aktualisieren' },
  fr: { appTitle: 'Citation du jour', navigation: 'Navigation', details: 'Détails', footer: 'Ma première application Vue', refreshQuote: 'Actualiser la citation' },
  es: { appTitle: 'Cita del día', navigation: 'Navegación', details: 'Detalles', footer: 'Mi primera aplicación Vue', refreshQuote: 'Actualizar cita' },
  it: { appTitle: 'Citazione del giorno', navigation: 'Navigazione', details: 'Dettagli', footer: 'La mia prima applicazione Vue', refreshQuote: 'Aggiorna citazione' },
}

const locale = ref<Locale>('pl')

export function useI18n() {
  const t = (key: keyof Messages) => messages[locale.value][key]
  const setLocale = (l: Locale) => { locale.value = l }
  return { locale, setLocale, t }
}
