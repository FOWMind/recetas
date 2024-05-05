"use client"
import { recipes } from "@/data"
import type { Recipe, RecipesProviderProps } from "@/types"
import { createContext } from "react"

export const RecipesContext = createContext<Recipe[]>([])

export const RecipesProvider = ({ children }: RecipesProviderProps) => {
  return <RecipesContext.Provider value={recipes}>{children}</RecipesContext.Provider>
}
