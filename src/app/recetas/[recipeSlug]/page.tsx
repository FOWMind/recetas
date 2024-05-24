'use client'
import { Headline } from '@/components'
import { useRecipeStore } from '@/store'
import type { RecipePageProps } from '@/types'
import Image from 'next/image'
import Markdown from 'react-markdown'

export default function RecipePage({ params: { recipeSlug } }: RecipePageProps) {
	const { recipes } = useRecipeStore()
	const recipeBySlug = recipes && recipes.find((recipe) => recipe.postSlug === recipeSlug)

	if (!recipeBySlug) {
		return <Headline size="xs">Cargando...</Headline>
	}

	return (
		<>
			<Headline>{recipeBySlug?.title}</Headline>
			{recipeBySlug.thumbnail && (
				<Image
					src={recipeBySlug.thumbnail}
					width={300}
					height={300}
					alt="Imagen de la receta"
					className="block h-72 w-full object-cover object-center"
				/>
			)}
			<Markdown>{recipeBySlug?.content}</Markdown>
		</>
	)
}
