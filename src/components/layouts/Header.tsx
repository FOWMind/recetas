'use client'
import { FieldGroup, Logo, Navigation, ToggleTheme, Wrapper } from '@/components'
import type { HeaderProps } from '@/types'
import { useTranslations } from 'next-intl'
import { IoSearchOutline } from 'react-icons/io5'

export const Header = ({ className = '', ...props }: HeaderProps) => {
	const t = useTranslations('Header.search')
	return (
		<header className={`py-8 mb-5 ${className}`} {...props}>
			<Wrapper>
				<div className="flex items-center justify-between gap-28">
					<div className="flex items-center justify-start gap-28">
						<Logo />
						<Navigation />
					</div>

					<div className="flex items-center justify-start gap-x-5">
						<FieldGroup icon={IoSearchOutline} placeholder={t('self')} />
						<ToggleTheme />
					</div>
				</div>
			</Wrapper>
		</header>
	)
}
