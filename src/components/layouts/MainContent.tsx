'use client'
import type { Category, MainContentProps } from '@/types'
import { CategoriesFilter, Headline, RecipesList } from '@/components'
import { useEffect, useState } from 'react'
import { getUniqueValues, recipeCategoryFormatter } from '@/utils'
import { useRecipeStore } from '@/store'

export const MainContent = ({ className = '', ...props }: MainContentProps) => {
	const { recipes, filteredRecipes } = useRecipeStore()
	const [recipesCategories, setRecipesCategories] = useState<Category[]>([])

	useEffect(() => {
		if (!recipes) {
			setRecipesCategories([])
			return
		}

		// TODO: Compare if uniqueCategories is equal to categories to avoid unnecessary updates
		const allCategories = recipes.flatMap((recipe) => recipe.categories)
		const uniqueCategories = getUniqueValues(allCategories)
		setRecipesCategories(uniqueCategories)
	}, [recipes])

	return (
		<main className={`mt-14 ${className}`} {...props}>
			<Headline as="h3" size="sm">
				Publicaciones
			</Headline>
			<CategoriesFilter categories={recipesCategories} categoryFormatter={recipeCategoryFormatter} />
			{recipes && <RecipesList recipes={filteredRecipes ?? recipes} />}
		</main>
	)
}
