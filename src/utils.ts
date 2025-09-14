export const KOWO_RECOMMENDED_LABEL = 'KOWO рекомендує';

export const encodeQueryParam = (param: string) => {
  return param.replaceAll(' ', '+');
};

export const decodeQueryParam = (param: string) => {
  return param.replaceAll('+', ' ');
};
