import { themeClasses } from '@/constants'
import { ThemeState } from '@/types'
import { getSavedTheme } from '@/utils'
import { create } from 'zustand'

export const useThemeStore = create<ThemeState>((set, get) => ({
	dark: themeClasses.defaultBoolean,
	setDark: (value) => set({ dark: value }),
	getIsDark: () => {
		const theme = getSavedTheme()
		if (!theme || theme === themeClasses.light) return false
		else if (theme === themeClasses.dark) return true
		return false
	},
}))
