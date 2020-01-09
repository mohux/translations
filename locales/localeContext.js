import { useRouter } from "next/dist/client/router";
import { isAllowedLocale } from "./config";
export const LocaleContext = React.createContext({
  locale: "en",
  setLocale: () => null
});

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const router = useRouter();
  // store the preference
  React.useEffect(() => {
    if (locale !== localStorage.getItem("locale")) {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);
  // sync locale value on client-side route changes
  React.useEffect(() => {
    const { query } = router;
    if (typeof query.lang === 'string' && isAllowedLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [router, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
