import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header, Wrapper } from '@/components'
import { themeClasses } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

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
		<html lang="es-LA" className={themeClasses.default}>
			<body className={inter.className}>
				<Wrapper>
					<Header />
					{children}
				</Wrapper>
			</body>
		</html>
	)
}
