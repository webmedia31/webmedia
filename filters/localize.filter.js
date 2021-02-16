import ru from '../locales/ru.json'
import en from '../locales/en.json'

const locales = {
  'ru-RU': ru,
  'en-EN': en
}

export default function localizedFilter(key, locale) {
  return locales[locale][key] || `[Localize error]: key "${key}" not found`
}
