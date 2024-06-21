'use client'
import { CategoriesFilter, Headline, Loading, Pagination } from '@/components'
import { RecipePaginationProvider } from '@/context'
import { getRecipes } from '@/data'
import { useRecipeStore } from '@/store'
import type { Category, RecipesProps } from '@/types'
import { getUniqueValues, recipeCategoryFormatter } from '@/utils'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const DynamicRecipeList = dynamic(async () => (await import('@/components')).RecipeList, {
	loading: () => <Loading />,
})

export const Recipes = ({ hasFilter = false, hasPagination = false }: RecipesProps) => {
	const {
		recipes,
		filteredRecipes,
		pagination: { pageAmount, currentPage, takenAmount },
	} = useRecipeStore()
	const [categories, setCategories] = useState<Category[]>([])
	const t = useTranslations('Recipes')
	const recipeData = hasFilter && Array.isArray(filteredRecipes) ? filteredRecipes : recipes.data

	useEffect(() => {
		if (!hasFilter) return
		if (!recipes) {
			setCategories([])
			return
		}

		// TODO: Compare if uniqueCategories is equal to categories to avoid unnecessary updates
		const allCategories = getRecipes(currentPage, takenAmount).data.flatMap((recipe) => recipe.categories)
		const uniqueCategories = getUniqueValues(allCategories)
		setCategories(uniqueCategories)
	}, [recipes, hasFilter])

	return (
		<RecipePaginationProvider>
			<section>
				<Headline as="h3" size="sm" className="mb-6">
					{t('posts')}
				</Headline>
				{hasFilter && recipeData.length > 0 ? (
					<CategoriesFilter categories={categories} categoryFormatter={recipeCategoryFormatter} />
				) : null}
				{recipes && <DynamicRecipeList recipes={recipeData} />}
				{hasPagination && pageAmount > 0 ? <Pagination className="mt-6" /> : null}
			</section>
		</RecipePaginationProvider>
	)
}
