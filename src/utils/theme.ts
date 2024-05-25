import { themeClasses } from '@/constants'
import { ThemeClassKey } from '@/types'

export const setInitialTheme = () => {
	document.documentElement.classList.remove(themeClasses.default)
	const savedTheme = localStorage.getItem('theme') as ThemeClassKey
	setTheme(savedTheme || themeClasses.default)
}

export const setTheme = (key: ThemeClassKey) => {
	const themeClass = themeClasses[key]
	const root = document.documentElement
	root.classList.add(themeClass)
	saveThemeToLocaleStorage(themeClass)
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

const saveThemeToLocaleStorage = (key: string) => {
	const savedTheme = localStorage.getItem('theme')
	if (key === savedTheme) return
	localStorage.setItem('theme', key)
}
