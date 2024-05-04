import type { RecipeCardProps } from "@/types"
import Image from "next/image"
import { Headline, Link } from "@/components"

export const RecipeCard = ({
  className = "",
  image,
  datetime,
  title,
  postSlug,
  children,
  ...props
}: RecipeCardProps) => {
  return (
    <Link href={`/recetas/${postSlug}`} className="p-0" shallow={true}>
      <article className={`overflow-hidden rounded-2xl border border-gray-300 ${className}`} {...props}>
        <Image src={image} width={250} height={250} alt="" className="h-72 w-full object-cover" />
        <div className="p-5">
          <time className="text-sm text-neutral-800 xl:text-base">{datetime.toLocaleDateString()}</time>
          <Headline size="xs" className="!line-clamp-3">
            {title}
          </Headline>
        </div>
      </article>
    </Link>
  )
}
