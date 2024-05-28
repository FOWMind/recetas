import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Wrapper } from '@/components'

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Recetas',
	description: '¡Encuentra todo tipo de recetas!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es-LA">
			<body className={roboto.className}>
				<Wrapper>
					<Header />
					{children}
				</Wrapper>
			</body>
		</html>
	)
}
