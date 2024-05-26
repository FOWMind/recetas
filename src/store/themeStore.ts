import { themeClasses } from '@/constants'
import { ThemeState } from '@/types'
import { getSavedTheme, setInitialTheme } from '@/utils'
import { create } from 'zustand'

export const useThemeStore = create<ThemeState>((set, get) => ({
	dark: themeClasses.isDefaultVisibleDark,
	setDark: (value) => set({ dark: value }),
	setInitialTheme: () => {
		setInitialTheme()
		get().setDark(get().getIsDark())
	},
	getIsDark: () => {
		const theme = getSavedTheme()
		if (!theme || theme === themeClasses.light) return false
		else if (theme === themeClasses.dark) return true
		return false
	},
}))
