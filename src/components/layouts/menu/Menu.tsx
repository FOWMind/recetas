import { MenuDesktop, MenuMobile } from '@/components'
import type { MenuProps } from '@/types'

export const Menu = ({ mobile, ...props }: MenuProps) => {
	if (mobile) return <MenuMobile {...props} />
	return <MenuDesktop {...props} />
}
