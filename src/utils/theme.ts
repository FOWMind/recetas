import { themeClasses } from '@/constants'
import type { GetSavedTheme, ThemeClassKey } from '@/types'

export const setInitialTheme = () => {
	const savedTheme = getSavedTheme() as ThemeClassKey
	setTheme(savedTheme || themeClasses.default)
}

export const toggleTheme = () => {
	const root = document.documentElement
	root.classList.remove(themeClasses.light) // Make sure it doesn't have the light class.
	root.classList.toggle(themeClasses.dark)

	const isDark = root.classList.contains(themeClasses.dark)
	if (isDark) {
		saveThemeToLocaleStorage(themeClasses.dark)
	} else {
		saveThemeToLocaleStorage(themeClasses.light)
	}
}

export const getSavedTheme = (): GetSavedTheme => {
	if (typeof window === 'undefined') return null
	const savedTheme = localStorage.getItem('theme')
	return savedTheme || null
}

const setTheme = (key: ThemeClassKey) => {
	const themeClass = themeClasses[key]
	const root = document.documentElement
	root.classList.add(themeClass)
	saveThemeToLocaleStorage(themeClass)
}

const saveThemeToLocaleStorage = (key: string) => {
	if (key === getSavedTheme()) return
	localStorage.setItem('theme', key)
}
