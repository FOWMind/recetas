"use client"
import type { Category, MainContentProps } from "@/types"
import { CategoriesFilter, Headline, RecipesList } from "@/components"
import { useContext, useEffect, useState } from "react"
import { RecipesContext } from "@/context"
import { getUniqueValues, recipeCategoryFormatter } from "@/utils"

export const MainContent = ({ className = "", ...props }: MainContentProps) => {
  const recipes = useContext(RecipesContext)
  const [recipesCategories, setRecipesCategories] = useState<Category[]>([])

  useEffect(() => {
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
      <RecipesList recipes={recipes} />
    </main>
  )
}
