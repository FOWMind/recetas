import type { RestOfProps } from "@/types"
import { IconType } from "react-icons"

/*
  Note:
  In case the icon prop is optional, create an
  alias as a React ElementType in the component.
  Example:
  Icon = icon as React.ElementType
*/
interface IconProps extends RestOfProps {
  icon: IconType
  className?: string
}

export const Icon = ({ icon: Icon, className = "", ...props }: IconProps) => {
  return <Icon className={`inline-block align-middle text-inherit ${className}`} {...props} />
}
