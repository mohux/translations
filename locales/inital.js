import { defaultLocale } from './config'
import { isLocale } from './types'

export function getInitialLocale() {
    const localSetting = localStorage.getItem('locale')
    if (localSetting && isLocale(localSetting)) {
        return localSetting
    }

    // the language setting of the browser
    const [browserSetting] = navigator.language.split('-')
    if (isLocale(browserSetting)) {
        return browserSetting
    }

    return defaultLocale
}