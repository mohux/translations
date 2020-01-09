export const defaultLocale = "en";
export const fallbackLocale = "en";
// * Defining active locales in the app
export const locales = ["ar", "en"];

export const isAllowedLocale = lang => locales.includes(lang);

export const getInitialLocale = () => {
  const storedLang = localStorage.getItem("locale");
  if (storedLang && isAllowedLocale(storedLang)) {
    return storedLang;
  }

  const [browserSetting] = navigator.language.split("-");
  if (isAllowedLocale(browserSetting)) {
    return browserSetting;
  }
  return defaultLocale;
};
