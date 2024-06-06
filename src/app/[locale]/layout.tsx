import { Footer, Header, Wrapper } from '@/components'
import type { LocaleLayoutProps } from '@/types'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Recetas',
	description: '¡Encuentra todo tipo de recetas!',
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={roboto.className}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					<Wrapper>{children}</Wrapper>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
