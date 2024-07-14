import type { ParagraphProps } from '@/types'

export const Paragraph = ({ as: As = 'p', className = '', ...props }: ParagraphProps) => {
	return <As className={`text-black dark:text-white ${className}`} {...props} />
}
