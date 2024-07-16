import type { LinkProps } from '@/types'
import { Link as IntlLink } from '@/navigation'
import { cn } from '@/lib'

export const Link = ({ className = '', href, as, ...props }: LinkProps) => {
	const As = as ?? IntlLink
	const isLink = href !== '' && href !== '#'
	return (
		<As
			className={cn(
				'inline-block p-2 font-medium text-black hover:text-neutral-800 dark:text-white dark:hover:text-neutral-300',
				!isLink ? 'cursor-default' : '',
				className,
			)}
			href={!as ? href : null}
			{...props}
		/>
	)
}
