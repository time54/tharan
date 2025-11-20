import { createI18n } from 'vue-i18n'

const messages = {
  en: { hello: 'hello' },
  zh: { hello: '你好' }
}

const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})

export default i18n
