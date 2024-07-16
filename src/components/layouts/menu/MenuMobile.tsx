'use client'
import { Icon, Navigation } from '@/components'
import { useState } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

interface MenuMobileProps extends React.PropsWithChildren {}

export const MenuMobile = ({ ...props }: MenuMobileProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const toggleMenu = () => setShowMenu((x) => !x)

	return (
		<div {...props}>
			<button type="button" onClick={toggleMenu}>
				<Icon icon={showMenu ? IoMdClose : IoIosMenu} size={40} />
			</button>

			<div className="fixed top-0 right-0 z-50 w-full h-full max-w-sm bg-white dark:bg-black">
				<Navigation mobile />
			</div>
		</div>
	)
}
