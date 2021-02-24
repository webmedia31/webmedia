import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit();

export default function transliturlFilter(str, space_replace = "-") {
  return cyrillicToTranslit.transform(str, space_replace).toLowerCase();
}