import { FieldGroup, Logo, Navigation } from "@/components"
import type { HeaderProps } from "@/types"
import { IoSearchOutline } from "react-icons/io5"

export const Header = ({ className = "", ...props }: HeaderProps) => {
  return (
    <header className={`flex items-center justify-between gap-28 py-8 ${className}`} {...props}>
      <div className="flex items-center justify-start gap-28">
        <Logo />
        <Navigation />
      </div>

      <div>
        <FieldGroup icon={IoSearchOutline} placeholder="Busca una receta" />
      </div>
    </header>
  )
}
