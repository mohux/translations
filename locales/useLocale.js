import { useContext } from "react";
import { LocaleContext } from "./localeContext";
import strings from "./translation";
import { defaultLocale } from "./config";

export default function useTranslation() {
  const { locale } = useContext(LocaleContext);

  function translate({ key }) {
    if (!strings[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return strings[locale][key] || strings[defaultLocale][key] || "";
  }

  return {
    translate,
    locale
  };
}
