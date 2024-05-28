import { Link, LinkList } from '@/components'
import { NavigationProps } from '@/types'
import { useTranslations } from 'next-intl'

export const Navigation = ({ className = '', ...props }: NavigationProps) => {
	const t = useTranslations('Header.navigation')
	return (
		<nav className={`${className}`} {...props}>
			<ul className="flex items-center justify-start gap-3">
				<li>
					<Link href="/">{t('home')}</Link>
				</li>
				<li>
					<LinkList label={t('explore.self')} as="span">
						<LinkList label={t('explore.recipes.self')} href="/recetas" className="submenu-menu">
							<Link href="/recetas/verificadas" shallow>
								{t('explore.recipes.verified')}
							</Link>
							<Link href="/recetas/comunitarias" shallow>
								{t('explore.recipes.community')}
							</Link>
						</LinkList>

						<Link href="/consejos" shallow>
							{t('explore.tips')}
						</Link>
					</LinkList>
				</li>
			</ul>
		</nav>
	)
}
