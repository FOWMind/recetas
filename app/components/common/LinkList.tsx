import { Link, Submenu } from "@/components"
import type { LinkProps, MappableChildren } from "@/types"

interface LinkListProps extends Omit<LinkProps, "href"> {
  label: string
  className?: string
  children: MappableChildren
}

export const LinkList = ({ label, as, href = "#", className = "", children, ...props }: LinkListProps) => {
  const As = as || Link

  return (
    <>
      <Link as="span" href="#" className={`hover:show-submenu relative ${!as && "!p-0"} ${className}`} {...props}>
        <As href={!as ? href : null} className="block w-full">
          {label}
        </As>
        <Submenu className="hidden-submenu submenu-transition absolute bottom-0 left-0">{children}</Submenu>
      </Link>
    </>
  )
}
