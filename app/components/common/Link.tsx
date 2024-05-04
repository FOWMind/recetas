import type { LinkProps } from "@/types"
import NextLink from "next/link"

export const Link = ({ className = "", href, as, ...props }: LinkProps) => {
  const As = as ?? NextLink
  const isLink = href !== "" && href !== "#"
  return (
    <As
      className={`inline-block ${!isLink ? "cursor-default" : ""} p-2 font-medium text-black hover:text-neutral-800 ${className}`}
      href={!as ? href : null}
      {...props}
    />
  )
}
