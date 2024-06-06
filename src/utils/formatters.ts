import { categories } from '@/constants'
import type { Category } from '@/types'
import { getLocale } from '@/utils'

export const recipeCategoryFormatter = (category: Category): string => {
	return categories[category]
}

export const dateFormatter = (date: Date) => {
	const locale = getLocale()
	const dateFormat = new Intl.DateTimeFormat(locale, {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	})
	return dateFormat.format(date)
}
