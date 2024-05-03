import type { RestOfProps } from "@/types"
import Image from "next/image"
import { Headline } from "@/components"

interface RecipeCardProps extends RestOfProps {
  className?: string
  image: string
  datetime: string
  title: string
}

export const RecipeCard = ({ className = "", image, datetime, title, children, ...props }: RecipeCardProps) => {
  return (
    <article className={`overflow-hidden rounded-xl border border-gray-300 ${className}`} {...props}>
      <Image src={image} width={250} height={250} alt="" className="h-72 w-full object-cover" />
      <div className="p-5">
        <time className="text-sm text-neutral-800 xl:text-base">{datetime}</time>
        <Headline size="xs" className="!line-clamp-3">
          {title}
        </Headline>
      </div>
    </article>
  )
}
