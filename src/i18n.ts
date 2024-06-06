import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { defaultLocale, locales } from '@/constants'

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as any)) notFound()

	return {
		messages: (await (locale === defaultLocale ? import('./messages/es.json') : import(`./messages/${locale}.json`)))
			.default,
	}
})
