import { Field, Icon } from "@/components"
import type { FieldGroupProps } from "@/types"

/**
 * @returns A field group with the field included.
 * @description Props that are not className and icon are passed to the field.
 */
export const FieldGroup = ({ className = "", icon, ...props }: FieldGroupProps) => {
  return (
    <div className={`relative h-12 w-full max-w-60 rounded-full bg-gray-200 ${className}`}>
      {icon && <Icon icon={icon} className="absolute left-4 top-2/4 size-5 -translate-y-2/4 text-gray-600" />}
      <Field className="h-full bg-transparent pl-11" {...props} />
    </div>
  )
}
