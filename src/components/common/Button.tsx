import type { ButtonProps } from '@/types'

enum variants {
	default = 'bg-white text-black dark:bg-black dark:text-white',
	featured = 'bg-black text-white dark:bg-neutral-900 dark:text-white',
}

export const Button = ({ className = '', as: As = 'button', variant = 'default', ...props }: ButtonProps) => {
	return (
		<As
			className={`inline-block rounded-full px-10 py-3 text-center font-medium ${variant && variants[variant]} ${className}`}
			{...props}
		/>
	)
}
