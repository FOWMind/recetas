import type { RecipePageProps } from "@/types"

export default function RecipePage({ params: { recipeSlug } }: RecipePageProps) {
  return <h2>Receta: {recipeSlug}</h2>
}
