import type { ButtonProps } from "@/types"

enum variants {
  default = "bg-white text-black",
  dark = "bg-black text-white",
}

export const Button = ({ className = "", variant = "default", ...props }: ButtonProps) => {
  return (
    <button
      className={`inline-block rounded-full px-10 py-3 text-center font-medium capitalize ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
