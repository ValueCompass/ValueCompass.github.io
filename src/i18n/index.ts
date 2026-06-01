import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'
import ja from './locales/ja'
import ko from './locales/ko'

const supportedLocales = ['en', 'zh', 'ja', 'ko']

const languageObj = {
  "English": 'en',
  "Chinese": 'zh',
  "Japanese": 'ja',
  "Korean": 'ko'
}

const countryLanguageMap = {
  China: "Chinese",
  Japan: "Japanese",
  "South Korea": "Korean",
  Korea: "Korean",
  "Republic of Korea": "Korean",
}

export const resolveLocale = (userDetail?: Record<string, any>) => {
  const currentUserDetail = userDetail ||
    JSON.parse(localStorage.getItem('userDetail') || '{}')
  const currentAdminDetail = userDetail
    ? {}
    : JSON.parse(localStorage.getItem('culturalValueAnnotationAdminDetail') || '{}')
  const currentDetail = currentUserDetail.language || currentUserDetail.country
    ? currentUserDetail
    : currentAdminDetail
  const storedLanguage = currentDetail.language
  const storedCountry = currentDetail.country

  if (!storedLanguage) {
    const fallbackLanguage = countryLanguageMap[storedCountry as keyof typeof countryLanguageMap]
    return languageObj[fallbackLanguage as keyof typeof languageObj] || 'en'
  }

  if (supportedLocales.includes(storedLanguage)) {
    return storedLanguage
  }

  return languageObj[storedLanguage as keyof typeof languageObj] || 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    ja,
    ko
  }
})

export const syncLocaleFromUserDetail = (userDetail?: Record<string, any>) => {
  const locale = resolveLocale(userDetail)
  i18n.global.locale.value = locale
  return locale
}

export default i18n