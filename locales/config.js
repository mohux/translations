import cookies from "next-cookies";
export const defaultLocale = "en";
// in days
export const localeCookiesAge = 7;

// * Defining active locales in the app
export const locales = ["ar", "en"];

export const isAllowedLocale = lang => locales.includes(lang);

export const getInitialLocale = (ctx) => {
  const storedLang = cookies(ctx).locale;
  if (storedLang && isAllowedLocale(storedLang)) {
    return storedLang;
  }

  return defaultLocale;
};
