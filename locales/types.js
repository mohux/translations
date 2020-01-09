const locales = [
    'ar',
    'en'
]

export function isLocale(lang) {
    return locales.some(locale => locale === lang)
}