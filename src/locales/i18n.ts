import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { storageService } from '@/services/storage'

import en from './en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    applyLanguageToDocument(i18n.language)
  })

export function setLanguage(lang: 'en') {
  i18n.changeLanguage(lang).then(() => {
    applyLanguageToDocument(lang)
    storageService.setLanguage(lang)
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function applyLanguageToDocument(_lang: string) {
  document.documentElement.lang = 'en-US'
  document.title = 'Resume Stack'
}

export function isChineseLanguage() {
  return false
}
