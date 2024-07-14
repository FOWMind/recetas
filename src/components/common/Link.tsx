import type { LinkProps } from '@/types'
import { Link as IntlLink } from '@/navigation'

export const Link = ({ className = '', href, as, ...props }: LinkProps) => {
	const As = as ?? IntlLink
	const isLink = href !== '' && href !== '#'
	return (
		<As
			className={`inline-block ${!isLink ? 'cursor-default' : ''} p-2 font-medium text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-300 ${className}`}
			href={!as ? href : null}
			{...props}
		/>
	)
}
