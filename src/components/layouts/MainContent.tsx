import type { MainContentProps } from '@/types'
import { Recipes } from '@/components'

export const MainContent = ({ className = '', ...props }: MainContentProps) => {
	return (
		<main className={`mt-14 ${className}`} {...props}>
			<Recipes />
		</main>
	)
}
