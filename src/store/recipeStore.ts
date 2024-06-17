import { globalDefaultCategory } from '@/constants'
import { recipes } from '@/data'
import { Category, RecipeState } from '@/types'
import { create } from 'zustand'

export const useRecipeStore = create<RecipeState>((set, get) => ({
	recipes: {
		pages: 0,
		data: [],
	},
	filteredRecipes: null,
	pagination: {
		currentPage: 1,
		lastPage: 0,
		siblingAmount: 3,
		pageAmount: 0,
		takenAmount: 10,
		setCurrentPage: (page: number) => {
			const newPagination = {
				...get().pagination,
				currentPage: page,
			}
			set({ pagination: newPagination })
		},
	},
	setInitialRecipes: () => {
		// Getting local data..
		const prevPagination = get().pagination
		const { pageAmount, takenAmount } = {
			pageAmount: recipes.pages,
			takenAmount: prevPagination.takenAmount,
		}
		const newPagination = {
			...prevPagination,
			pageAmount,
			lastPage: takenAmount > pageAmount ? pageAmount : Math.floor(pageAmount / takenAmount),
			setCurrentPage: get().pagination.setCurrentPage,
		}
		set({ recipes, pagination: newPagination })
	},
	setFilteredRecipes: (category: Category) => {
		const initialRecipes = get().recipes.data
		if (!initialRecipes) return
		if (category === globalDefaultCategory) {
			set({ filteredRecipes: null })
			return
		}
		const filtered = recipes.data.filter((r) => r.categories.includes(category))
		set({ filteredRecipes: filtered })
	},
}))
