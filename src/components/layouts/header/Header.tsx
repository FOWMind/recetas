'use client'
import { Logo, Menu, Wrapper } from '@/components'
import { useViewportSize } from '@/hooks'
import type { HeaderProps } from '@/types'

export const Header = ({ className = '', ...props }: HeaderProps) => {
	const { isMobileSize } = useViewportSize()

	return (
		<header className={`py-8 mb-5 ${className}`} {...props}>
			<Wrapper>
				<div className="flex-1 flex items-center justify-between gap-28">
					<Logo />

					{isMobileSize ? <Menu mobile /> : <Menu />}
				</div>
			</Wrapper>
		</header>
	)
}
