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

	setInitialRecipes: () => {
		// Getting local data..
		set({ recipes })
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
