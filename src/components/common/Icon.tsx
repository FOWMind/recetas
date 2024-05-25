import type { IconProps } from '@/types'

/*
  Note:
  In case the icon prop is optional, create an
  alias as a React ElementType in the component.
  Example:
  Icon = icon as React.ElementType
*/
export const Icon = ({ icon: Icon, className = '', ...props }: IconProps) => {
	return <Icon className={`inline-block align-middle text-inherit ${className}`} {...props} size={24} />
}
