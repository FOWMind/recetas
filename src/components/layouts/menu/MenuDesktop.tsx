import { AuthButtons, FieldGroup, Navigation, ToggleTheme } from '@/components'
import { useTranslations } from 'next-intl'
import { IoSearchOutline } from 'react-icons/io5'

interface MenuDesktopProps extends React.PropsWithChildren {}

export const MenuDesktop = ({ ...props }: MenuDesktopProps) => {
	const t = useTranslations('Header.search')
	return (
		<div className="flex-1 flex items-center justify-between gap-28" {...props}>
			<Navigation />

			<div className="flex items-center justify-start gap-x-5">
				<FieldGroup icon={IoSearchOutline} placeholder={t('self')} />
				<ToggleTheme />
				<AuthButtons />
			</div>
		</div>
	)
}
