'use client'
import { ToggleThemeProps } from '@/types'
import { toggleTheme } from '@/utils'
import { Icon, Paragraph } from '@/components'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useThemeStore } from '@/store'

export const ToggleTheme = ({ className = '', ...props }: ToggleThemeProps) => {
	const { dark, setDark } = useThemeStore()

	const onClick = () => {
		toggleTheme()
		setDark(!dark)
	}

	return (
		<button
			className="outline-none bg-neutral-300 dark:bg-neutral-900 p-2 rounded-md border-none cursor-pointer flex items-center justify-start gap-x-2"
			onClick={onClick}
			{...props}>
			<Icon icon={dark ? MdDarkMode : MdLightMode} className="text-violet-800 dark:text-yellow-500" />
			<Paragraph as="span" className="text-black font-medium">
				Modo {dark ? 'oscuro' : 'claro'}
			</Paragraph>
		</button>
	)
}
