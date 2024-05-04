import type { WrapperProps } from "@/types"

export const Wrapper = ({ className = "", ...props }: WrapperProps) => {
  return (
    <div className={`mx-auto min-h-screen w-full max-w-screen-lg p-5 2xl:max-w-screen-xl ${className}`} {...props} />
  )
}
