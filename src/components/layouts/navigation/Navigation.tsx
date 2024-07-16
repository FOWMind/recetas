import { NavigationDesktop, NavigationMobile } from '@/components'
import type { NavigationProps } from '@/types'

export const Navigation = ({ className = '', mobile, ...props }: NavigationProps) => {
	return (
		<nav className={`${className}`} {...props}>
			{mobile ? <NavigationMobile /> : <NavigationDesktop />}
		</nav>
	)
}
