import { Headline } from '@/components'
import type { LogoProps } from '@/types'
import { useTranslations } from 'next-intl'

export const Logo = ({ className = '', ...props }: LogoProps) => {
	const t = useTranslations('Header.logo')
	return (
		<div className={`${className}`} {...props}>
			<Headline>{t('self')}</Headline>
		</div>
	)
}
