import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zh from './locales/zh'
import ja from './locales/ja'
import ko from './locales/ko'

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

const storedUserDetail = JSON.parse(localStorage.getItem('userDetail') || '{}');
const storedLanguage = storedUserDetail.language;
const storedCountry = storedUserDetail.country;

// Determine the locale: if storedLanguage is a language code (en/zh/ja/ko), use it directly;
// otherwise, try to map it from languageObj;
// if language is missing, fall back to country -> language -> locale
const getLocale = () => {
  if (!storedLanguage) {
    const fallbackLanguage = countryLanguageMap[storedCountry as keyof typeof countryLanguageMap];
    return languageObj[fallbackLanguage as keyof typeof languageObj] || 'en';
  }
  
  // Check if storedLanguage is already a language code
  if (['en', 'zh', 'ja', 'ko'].includes(storedLanguage)) {
    return storedLanguage;
  }
  
  // Otherwise, try to map it from languageObj
  return languageObj[storedLanguage as keyof typeof languageObj] || 'en';
};

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    ja,
    ko
  }
})

export default i18n