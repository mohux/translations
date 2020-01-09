import { useRouter } from "next/dist/client/router";
import { locales } from "~/locales/config";
import { useLocale } from "~/locales";
const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useLocale();
  const handleLocaleChange = React.useCallback(
    e => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${e.target.value}`)
      );
    },
    [router]
  );

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcher;
