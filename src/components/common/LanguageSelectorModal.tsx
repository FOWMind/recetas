'use client'
import type { LanguageSelectorModalProps, Locale } from '@/types'
import { usePathname, useRouter } from '@/navigation'
import { useParams } from 'next/navigation'
import { Button, Submenu } from '@/components'
import { languages } from '@/constants'

export const LanguageSelectorModal = ({ toggleSelector }: LanguageSelectorModalProps) => {
	const router = useRouter()
	const pathname = usePathname()
	const params = useParams()

	const changeLanguage = (lng: Locale) => {
		// @ts-expect-error
		router.replace({ pathname, params }, { locale: lng })
	}

	return (
		<Submenu className="absolute -translate-y-full translate-x-full -top-1/4 right-0" onClose={toggleSelector}>
			{languages.map((l) => (
				<Button key={l.path} onClick={() => changeLanguage(l.path)} className="!p-2 !text-left">
					{l.name}
				</Button>
			))}
		</Submenu>
	)
}
