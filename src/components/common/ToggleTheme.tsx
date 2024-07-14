'use client'
import type { ToggleThemeProps } from '@/types'
import { toggleTheme } from '@/utils'
import { Icon, Paragraph } from '@/components'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useThemeStore } from '@/store'
import { useTranslations } from 'next-intl'

export const ToggleTheme = ({ className = '', ...props }: ToggleThemeProps) => {
	const { dark, setDark } = useThemeStore()
	const t = useTranslations('Header.toggleTheme')

	const onClick = () => {
		toggleTheme()
		setDark(!dark)
	}

	return (
		<button
			className="outline-none bg-none p-2 rounded-full border-none cursor-pointer flex items-center justify-start gap-x-2"
			onClick={onClick}
			{...props}>
			<Icon icon={dark ? MdDarkMode : MdLightMode} className="text-violet-800 dark:text-yellow-500" />
			<Paragraph as="span" className="text-black font-medium">
				{dark ? t('dark') : t('light')}
			</Paragraph>
		</button>
	)
}
