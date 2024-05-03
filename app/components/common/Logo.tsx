import { Headline } from "@/components"
import type { RestOfProps } from "@/types"

interface LogoProps extends RestOfProps {
  className?: string
}

export const Logo = ({ className = "", ...props }: LogoProps) => {
  return (
    <div className={`${className}`} {...props}>
      <Headline>Recetas</Headline>
    </div>
  )
}
