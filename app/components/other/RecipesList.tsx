import type { RecipesListProps } from "@/types"
import { RecipeCard } from "@/components"

export const RecipesList = ({ className = "", recipes, ...props }: RecipesListProps) => {
  return (
    <section className={`grid grid-cols-3 gap-6 ${className}`} {...props}>
      {recipes.length > 0 &&
        recipes.map(({ id, thumbnail, ...props }) => <RecipeCard key={id} image={thumbnail} {...props} />)}
    </section>
  )
}
