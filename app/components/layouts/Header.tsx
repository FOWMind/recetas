import { Field, Logo, Navigation } from "@/components"
import type { RestOfProps } from "@/types"

interface HeaderProps extends RestOfProps {
  className?: string
}

export const Header = ({ className = "", ...props }: HeaderProps) => {
  return (
    <header className={`flex items-center justify-between gap-28 py-8 ${className}`} {...props}>
      <div className="flex items-center justify-start gap-28">
        <Logo />
        <Navigation />
      </div>

      <div>
        <Field placeholder="Busca una receta" />
      </div>
    </header>
  )
}
