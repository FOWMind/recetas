'use client'
import { Headline } from '@/components'
import { RecipeContent } from '@/components/recipe'
import { useRecipeStore } from '@/store'
import type { RecipePageProps } from '@/types'

export default function RecipePage({ params: { recipeSlug } }: RecipePageProps) {
	const { recipes } = useRecipeStore()
	const recipeBySlug = recipes && recipes.find((recipe) => recipe.postSlug === recipeSlug)

	if (!recipeBySlug) {
		return <Headline size="xs">Cargando...</Headline>
	}

	return <RecipeContent recipe={recipeBySlug} />
}
