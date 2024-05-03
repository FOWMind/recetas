import type { RestOfProps } from "@/types"
import { Button, Headline, RecipeCard } from "@/components"

interface MainContentProps extends RestOfProps {}

export const MainContent = ({ className, ...props }: MainContentProps) => {
  return (
    <main className="mt-14" {...props}>
      <Headline as="h3" size="sm">
        Publicaciones
      </Headline>

      {/* Posts filter */}
      <div className="my-4 flex w-fit gap-y-4 rounded-full border border-gray-300 p-1">
        <Button variant="dark">Ver receta</Button>
        <Button>Proteínas</Button>
        <Button>Carbohidratos</Button>
        <Button>Para el frío</Button>
        <Button>Para el calor</Button>
      </div>

      {/* Recipes posts */}
      <section className="grid grid-cols-3 gap-10">
        <RecipeCard
          image="https://picsum.photos/600"
          datetime="2 de mayo, 2023"
          title="Off to the grill! The most beautiful BBQ recipes"
        />
        <RecipeCard
          image="https://picsum.photos/600"
          datetime="2 de mayo, 2023"
          title="Off to the grill! The most beautiful BBQ recipes"
        />
        <RecipeCard
          image="https://picsum.photos/600"
          datetime="2 de mayo, 2023"
          title="Off to the grill! The most beautiful BBQ recipes"
        />
        <RecipeCard
          image="https://picsum.photos/600"
          datetime="2 de mayo, 2023"
          title="Off to the grill! The most beautiful BBQ recipes"
        />
      </section>
    </main>
  )
}
