import type { RestOfProps } from "@/types"

interface LinkProps extends RestOfProps {
  href: string
  className?: string
}

export const Link = ({ href = "", className = "", ...props }: LinkProps) => {
  return <a href="/" className="p-2 font-medium text-black hover:text-neutral-800" {...props} />
}
