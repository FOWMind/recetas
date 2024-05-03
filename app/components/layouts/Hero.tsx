import { Button, Headline } from "@/components"
import type { RestOfProps } from "@/types"

interface HeroProps extends RestOfProps {
  className?: string
}

export const Hero = ({ className = "", ...props }: HeroProps) => {
  return (
    <section className="relative flex min-h-[400px] w-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-lime-600 bg-[url(/images/banners/featured.jpg)] bg-cover bg-center before:absolute before:inset-0 before:h-full before:w-full before:bg-black/10 before:content-['']">
      <div className="relative z-10 flex max-w-xl flex-col items-start justify-start gap-5 p-10">
        <Headline size="lg" className="text-white">
          Fideos con salsa bolognesa
        </Headline>
        <Button>Ver receta</Button>
      </div>
    </section>
  )
}
