import type { ButtonProps } from '@/types'

enum variants {
	default = 'bg-white text-black dark:bg-black dark:text-white',
	featured = 'bg-black text-white dark:bg-white dark:text-black disabled:text-black dark:disabled:text-white',
}

export const Button = ({ className = '', as: As = 'button', variant = 'default', ...props }: ButtonProps) => {
	return (
		<As
			className={`inline-block rounded-full px-10 py-3 text-center font-medium disabled:bg-transparent dark:disabled:bg-transparent disabled:opacity-20 ${variant && variants[variant]} ${className}`}
			{...props}
		/>
	)
}
