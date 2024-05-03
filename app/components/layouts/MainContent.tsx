import type { RestOfProps } from "@/types"
import { Button, Headline } from "@/components"
import Image from "next/image"

interface MainContentProps extends RestOfProps {}

export const MainContent = ({ className, ...props }: MainContentProps) => {
  return (
    <main className="mt-14" {...props}>
      <Headline as="h3" size="sm">
        Publicaciones
      </Headline>

      <div className="my-4 flex w-fit gap-y-4 rounded-full border border-gray-300 p-1">
        <Button variant="dark">Ver receta</Button>
        <Button>Proteínas</Button>
        <Button>Carbohidratos</Button>
        <Button>Para el frío</Button>
        <Button>Para el calor</Button>
      </div>

      <section className="grid grid-cols-3 content-start gap-10">
        <article className="overflow-hidden rounded-xl border border-gray-300">
          <Image src="https://picsum.photos/600" width={250} height={250} alt="" className="h-72 w-full object-cover" />
          <div className="p-5">
            <time className="text-sm text-neutral-800 xl:text-base">2 de mayo, 2023</time>
            <Headline size="xs">Off to the grill! The most beautiful BBQ recipes</Headline>
          </div>
        </article>
      </section>
    </main>
  )
}
