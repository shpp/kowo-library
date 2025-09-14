export const KOWO_RECOMMENDED_LABEL = 'KOWO рекомендує';

export const encodeQueryParam = (param: string) => {
  return param.replaceAll(' ', '+');
};

export const decodeQueryParam = (param: string = '') => {
  return param.replaceAll('+', ' ');
};

const UA_NAME = 'Українська' as const;
const RU_NAME = 'Москворота' as const;
const EN_NAME = 'Англійська' as const;

export type LanguageName = typeof UA_NAME | typeof RU_NAME | typeof EN_NAME;
export type LanguageCode = 'ua' | 'ru' | 'en';

export const languageCodeToNameMap: Record<LanguageCode, LanguageName> = {
  ua: UA_NAME,
  ru: RU_NAME,
  en: EN_NAME,
} as const;

export const languageNameToCodeMap: Record<LanguageName, LanguageCode> = {
  [UA_NAME]: 'ua',
  [RU_NAME]: 'ru',
  [EN_NAME]: 'en',
} as const;
