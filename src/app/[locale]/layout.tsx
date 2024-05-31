import { Header, Wrapper } from '@/components'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Recetas',
	description: '¡Encuentra todo tipo de recetas!',
}

interface LocaleLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={roboto.className}>
				<NextIntlClientProvider messages={messages}>
					<Wrapper>
						<Header />
						{children}
					</Wrapper>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
