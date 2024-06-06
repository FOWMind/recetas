import { defaultLocale } from '@/constants'

export const getLocale = () => {
	if (navigator.languages !== undefined) return navigator.languages[0]
	return navigator.language || defaultLocale
}
