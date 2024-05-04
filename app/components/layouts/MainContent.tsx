"use client"

import type { MainContentProps } from "@/types"
import { Button, Headline, RecipeCard } from "@/components"
import { useContext } from "react"
import { RecipesContext } from "@/context"

export const MainContent = ({ className, ...props }: MainContentProps) => {
  const recipes = useContext(RecipesContext)

  return (
    <main className="mt-14" {...props}>
      <Headline as="h3" size="sm">
        Publicaciones
      </Headline>

      {/* Posts filter */}
      <div className="my-6 flex w-fit gap-y-4 rounded-full border border-gray-300 p-1">
        <Button variant="dark">Ver receta</Button>
        <Button>Proteínas</Button>
        <Button>Carbohidratos</Button>
        <Button>Para el frío</Button>
        <Button>Para el calor</Button>
      </div>

      {/* Recipes posts */}
      <section className="grid grid-cols-3 gap-6">
        {recipes.length > 0 &&
          recipes.map(({ id, thumbnail, ...props }) => <RecipeCard key={id} image={thumbnail} {...props} />)}
      </section>
    </main>
  )
}
