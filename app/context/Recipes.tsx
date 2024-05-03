"use client"

import { recipes } from "@/data"
import type { Recipe } from "@/types"
import { createContext } from "react"

export const RecipesContext = createContext<Recipe[]>([])

interface RecipesProviderProps {
  children: React.ReactNode
}

export const RecipesProvider = ({ children }: RecipesProviderProps) => {
  return <RecipesContext.Provider value={recipes}>{children}</RecipesContext.Provider>
}
