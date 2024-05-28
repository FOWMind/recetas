import type { RecipeContentProps } from '@/types'
import { Headline } from '../common'
import Image from 'next/image'
import Markdown from 'react-markdown'

export const RecipeContent = ({ recipe }: RecipeContentProps) => {
	return (
		<div className="recipe-content">
			{recipe.thumbnail && (
				<Image
					src={recipe.thumbnail}
					width={1280}
					height={384}
					alt="Imagen de la receta"
					className="block h-96 w-full object-cover object-center rounded-xl"
				/>
			)}
			<Headline as="h1" size="sm" featured>
				{recipe?.title}
			</Headline>
			<Markdown>{recipe?.content}</Markdown>
		</div>
	)
}
