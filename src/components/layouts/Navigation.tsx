import { Link, LinkList } from "@/components"
import { NavigationProps } from "@/types"

export const Navigation = ({ className = "", ...props }: NavigationProps) => {
  return (
    <nav className={`${className}`} {...props}>
      <ul className="flex items-center justify-start gap-3">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <LinkList label="Explorar" as="span">
            <LinkList label="Recetas" href="/recetas" className="submenu-menu">
              <Link href="/recetas/verificadas" shallow>
                Verificadas
              </Link>
              <Link href="/recetas/comunitarias" shallow>
                Comunitarias
              </Link>
            </LinkList>

            <Link href="/consejos" shallow>
              Consejos
            </Link>
          </LinkList>
        </li>
      </ul>
    </nav>
  )
}
