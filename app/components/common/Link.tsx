import type { RestOfProps } from "@/types"
import NextLink from "next/link"

interface LinkProps extends RestOfProps {
  href: string
  className?: string
  shallow?: boolean
}

export const Link = ({ className = "", ...props }: LinkProps) => {
  return <NextLink className={`p-2 font-medium text-black hover:text-neutral-800 ${className}`} {...props} />
}
