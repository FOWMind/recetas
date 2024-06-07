'use client'
import type { Category, MainContentProps } from '@/types'
import { CategoriesFilter, Headline, Loading, Pagination } from '@/components'
import { useEffect, useState } from 'react'
import { getUniqueValues, recipeCategoryFormatter } from '@/utils'
import { useRecipeStore } from '@/store'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'

const DynamicRecipeList = dynamic(async () => (await import('@/components')).RecipeList, {
	loading: () => <Loading />,
})

export const MainContent = ({ className = '', ...props }: MainContentProps) => {
	const { recipes, filteredRecipes } = useRecipeStore()
	const [recipesCategories, setRecipesCategories] = useState<Category[]>([])
	const t = useTranslations('MainContent')

	useEffect(() => {
		if (!recipes) {
			setRecipesCategories([])
			return
		}

		// TODO: Compare if uniqueCategories is equal to categories to avoid unnecessary updates
		const allCategories = recipes.data.flatMap((recipe) => recipe.categories)
		const uniqueCategories = getUniqueValues(allCategories)
		setRecipesCategories(uniqueCategories)
	}, [recipes])

	return (
		<main className={`mt-14 ${className}`} {...props}>
			<Headline as="h3" size="sm">
				{t('posts')}
			</Headline>
			<CategoriesFilter categories={recipesCategories} categoryFormatter={recipeCategoryFormatter} />
			{recipes && <DynamicRecipeList recipes={filteredRecipes ?? recipes.data} />}
			{/*<Pagination amount={recipes.pages} currentPage={1} className="mt-6" />*/}
		</main>
	)
}
