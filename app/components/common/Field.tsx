import type { FieldProps } from "@/types"

export const Field = ({ type = "text", className = "", ...props }: FieldProps) => {
  return (
    <input
      type={type}
      className={`block h-12 w-full max-w-60 rounded-full border border-transparent bg-gray-200 px-4 outline-none placeholder:text-gray-600 focus-within:border-black focus-within:placeholder:text-transparent ${className}`}
      {...props}
    />
  )
}
