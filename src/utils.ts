export const KOWO_RECOMMENDED_LABEL = 'KOWO рекомендує';

export const encodeQueryParam = (param: string) => {
  return param.replaceAll(' ', '+');
};

export const decodeQueryParam = (param: string = '') => {
  return param.replaceAll('+', ' ');
};

export const languageCodeToNameMap = {
  ua: 'Українська',
  ru: 'Москворота',
  en: 'Англійська',
} as const;

export const languageNameToCodeMap = {
  Українська: 'ua',
  Москворота: 'ru',
  Англійська: 'en',
} as const;
