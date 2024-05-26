'use client'
import { Loading } from '@/components'
import { useRecipeStore } from '@/store'
import type { RecipePageProps } from '@/types'
import dynamic from 'next/dynamic'

const DynamicRecipeContent = dynamic(() => import('@/components').then((mod) => mod.RecipeContent), {
	loading: () => <Loading />,
})

export default function RecipePage({ params: { recipeSlug } }: RecipePageProps) {
	const { recipes } = useRecipeStore()
	const recipeBySlug = recipes && recipes.find((recipe) => recipe.postSlug === recipeSlug)

	if (!recipeBySlug) return

	return <DynamicRecipeContent recipe={recipeBySlug} />
}
