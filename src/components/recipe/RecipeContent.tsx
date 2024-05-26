import type { Recipe } from '@/types'
import { Headline } from '../common'
import Image from 'next/image'
import Markdown from 'react-markdown'

interface RecipeContentProps {
	recipe: Recipe
}

export const RecipeContent = ({ recipe }: RecipeContentProps) => {
	return (
		<>
			<Headline>{recipe?.title}</Headline>
			{recipe.thumbnail && (
				<Image
					src={recipe.thumbnail}
					width={300}
					height={300}
					alt="Imagen de la receta"
					className="block h-72 w-full object-cover object-center"
				/>
			)}
			<Markdown>{recipe?.content}</Markdown>
		</>
	)
}
