'use client'
import { Button } from '@/components'
import { globalDefaultCategory } from '@/constants'
import { useRecipeStore } from '@/store'
import type { CategoriesFilterProps, Category } from '@/types'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const CategoriesFilter = ({
	className = '',
	categories,
	categoryFormatter,
	defaultCategory = globalDefaultCategory,
	...props
}: CategoriesFilterProps) => {
	const [activeCategory, setActiveCategory] = useState<Category>(defaultCategory)
	const { setFilteredRecipes } = useRecipeStore()
	const t = useTranslations('MainContent.categoriesFilter')

	const handleCategory = (category: Category = globalDefaultCategory) => {
		if (category === activeCategory) return
		setActiveCategory(category)
	}

	useEffect(() => setFilteredRecipes(activeCategory), [activeCategory, setFilteredRecipes])

	return (
		<div
			className={`my-6 flex w-fit gap-y-4 rounded-full border border-gray-300 p-1 dark:border-neutral-800 ${className}`}
			{...props}>
			<Button
				variant={globalDefaultCategory === activeCategory ? 'featured' : undefined}
				onClick={() => handleCategory()}>
				{t('all')}
			</Button>
			{categories.map((category, i) => (
				<Button
					key={i}
					variant={category === activeCategory ? 'featured' : undefined}
					onClick={() => handleCategory(category)}>
					{categoryFormatter(category)}
				</Button>
			))}
		</div>
	)
}
