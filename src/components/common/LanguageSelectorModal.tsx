import { Link, Submenu } from '@/components'
import { languages } from '@/constants'
import type { LanguageSelectorModalProps } from '@/types'

export const LanguageSelectorModal = ({ toggleSelector }: LanguageSelectorModalProps) => {
	return (
		<Submenu className="absolute -translate-y-full translate-x-full -top-1/4 right-0" onClose={toggleSelector}>
			{languages.map((l) => (
				<Link key={l.path} href={`/${l.path}`}>
					{l.name}
				</Link>
			))}
		</Submenu>
	)
}
