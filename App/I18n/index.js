import I18n, { getLanguages } from 'react-native-i18n'
import en from './locales/en_us'
import zh from './locales/zh_cn'

I18n.fallbacks = true

I18n.translations = {
  en,
  zh
}

I18n.getLanguage = function () {
  return new Promise((resolve, reject) => {
    storage.load({
      key: 'customLang',
    }).then(ret => {
      resolve(ret)
    }, err => {
      // User language setting not Found    
      getLanguages().then(locales => {
        // The judgment here is not accurate, please judge by actual.
        console.log(locales)
        const firstLocale = locales[0]
        const locale = ~firstLocale.indexOf('zh') ? 'zh' : 'en'
        resolve(locale)
      }, err => {
        reject(err)
      })
    })
  })
}

I18n.setLanguage = function (lang) {
  storage.save({
    key: 'customLang',
    data: lang
  })
}

export default I18n
