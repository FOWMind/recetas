import { Icon, Link, Submenu } from "@/components"
import type { LinkProps, MappableChildren } from "@/types"
import { IoIosArrowForward } from "react-icons/io"

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
        <As href={!as ? href : null} className="flex w-full items-center justify-between gap-1">
          {label}
          <Icon icon={IoIosArrowForward} />
        </As>
        <Submenu className="hidden-submenu submenu-transition absolute bottom-0 left-0">{children}</Submenu>
      </Link>
    </>
  )
}
