import type { RecipeListProps } from '@/types'
import { RecipeCard } from '@/components'

export const RecipeList = ({ className = '', recipes, ...props }: RecipeListProps) => {
	return (
		<section
			className={`grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-6 ${className}`}
			{...props}>
			{recipes.length > 0 &&
				recipes.map(({ id, thumbnail, ...props }) => <RecipeCard key={id} image={thumbnail} {...props} />)}
		</section>
	)
}