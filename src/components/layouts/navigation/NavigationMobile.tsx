import { Link } from '@/components'
import { cn } from '@/lib'
import { useTranslations } from 'next-intl'

export const NavigationMobile = () => {
	const t = useTranslations('Header.navigation')

	return (
		<ul className="flex flex-col items-center justify-start">
			<NavigationMobile.Item href="/">{t('home')}</NavigationMobile.Item>

			<NavigationMobile.Item as="button">{t('explore.self')}</NavigationMobile.Item>
			<NavigationMobile.Item href="/">{t('explore.recipes.self')}</NavigationMobile.Item>
			<NavigationMobile.Item href="/">{t('explore.tips')}</NavigationMobile.Item>
		</ul>
	)
}

interface NavigationMobileItemProps extends React.HTMLProps<HTMLAnchorElement> {}

const NavigationMobileItem = ({ className, children, ...props }: NavigationMobileItemProps) => {
	return (
		<li className="block w-full">
			<Link
				href="/"
				className={cn('p-4 block w-full text-center hover:bg-black/10 dark:hover:bg-white/10', className)}
				{...props}>
				{children}
			</Link>
		</li>
	)
}

NavigationMobile.Item = NavigationMobileItem
