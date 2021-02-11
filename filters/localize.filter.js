import ru from '../locales/ru.json'
import en from '../locales/en.json'
import store from '../store'
// import store from 'vuex'

const locales = {
  'ru-RU': ru,
  'en-EN': en
}

export default function localizedFilter(key, locale) {


  console.log(locale);
  // console.log(key);
  // console.log(arg);

  // console.log(getters.lang);
  // console.log(store);

  // console.log(store.getters);


  // console.log(store.dispatch('get_locale'));
  // console.log(store.getters.lang);


  // const locale = 'ru-RU'
  // const locale = 'en-EN'

  return locales[locale][key] || `[Localize error]: key "${key}" not found`
}
