import type { HeadlineProps } from "@/types"

enum sizes {
  xs = "text-xl 2xl:text-2xl",
  sm = "text-2xl 2xl:text-3xl",
  md = "text-3xl 2xl:text-4xl",
  lg = "text-4xl 2xl:text-5xl",
  xl = "text-5xl 2xl:text-6xl",
}

export const Headline = ({ as = "h2", size = "md", className = "", ...props }: HeadlineProps) => {
  const As = as
  return (
    <As
      className={`block font-medium !leading-tight text-black dark:text-white ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
