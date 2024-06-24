import type { RecipeListProps } from '@/types'
import { Paragraph, RecipeCard } from '@/components'
import { useTranslations } from 'next-intl'

export const RecipeList = ({ className = '', recipes, ...props }: RecipeListProps) => {
	const t = useTranslations('Recipes.list')
	return (
		<section
			className={`grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-6 ${className}`}
			{...props}>
			{recipes.length > 0 ? (
				recipes.map(({ id, thumbnail, featured, ...props }) => <RecipeCard key={id} image={thumbnail} {...props} />)
			) : (
				<Paragraph>{t('empty')}</Paragraph>
			)}
		</section>
	)
}
