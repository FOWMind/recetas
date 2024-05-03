import { Field } from "@/components"
import type { RestOfProps } from "@/types"
import { IconType } from "react-icons"

interface FieldGroupProps extends RestOfProps {
  className?: string
  icon?: IconType
}

/**
 * @returns A field group with the field included.
 * @description Props that are not className and icon are passed to the field.
 */
export const FieldGroup = ({ className = "", icon, ...props }: FieldGroupProps) => {
  const Icon = icon as React.ElementType
  return (
    <div className={`relative h-12 w-full max-w-60 rounded-full bg-gray-200 ${className}`}>
      <Icon size={20} className="absolute left-4 top-2/4 size-5 -translate-y-2/4 text-gray-600" />
      <Field className="h-full bg-transparent pl-11" {...props} />
    </div>
  )
}
