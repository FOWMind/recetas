import type { Language, Locale } from '@/types'
import type { LocalePrefix, Pathnames } from 'next-intl/routing'

export const locales: Locale[] = ['es', 'en'] as const
export const defaultLocale: Locale = 'es' as const

export const pathnames: Pathnames<typeof locales> = {
	'/': '/',
	'/recetas': {
		es: '/recetas',
		en: '/recipes',
	},
}

export const localePrefix: LocalePrefix<typeof locales> = 'always'

export const languages: Language[] = [
	{
		path: 'es',
		name: 'Español',
	},
	{
		path: 'en',
		name: 'English',
	},
]
