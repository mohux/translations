import Link from "next/link";
import { useLocale } from "~/locales";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
const NextLink = props => {
  const { locale } = useLocale();
  const router = useRouter();
  const linkProps = { ...props };
  delete linkProps.href;
  delete linkProps.as;
  delete linkProps.prefetch;
  delete linkProps.children;
  delete linkProps.activeClassName;
  delete linkProps.className;


  const href = props.as ? `/[lang]${props.href}` : `/${locale}${props.href}`;
  let className = props.className + " ";

  if (router.asPath === `/${locale}${props.href}`) {
    className += props.activeClassName;
  }

  if (props.as) {
    const as = `/${locale}${props.as}`;
    return (
      <Link href={href} as={as} prefetch={props.prefetch || false}>
        <a {...linkProps} className={className} hrefLang={locale}>
          {props.children}
        </a>
      </Link>
    );
  }
  console.log(href)

  return (
    <Link href={`/[lang]${props.href}`} as={href} prefetch={props.prefetch || false}>
      <a {...linkProps} className={className} hrefLang={locale}>
        {props.children}
      </a>
    </Link>
  );
};
NextLink.propTypes = {
  /** NextJs Link href or page href */
  href: PropTypes.string.isRequired,
  /** NextJs Link as or page what will the url look like, should match href pattern */
  as: PropTypes.string,
  /** Should NextJs prefetch this url? default is false */
  prefetch: PropTypes.string
  /**Gives a className to the active link, default is null */
};
export default NextLink;
