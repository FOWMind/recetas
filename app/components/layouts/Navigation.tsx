import { Link } from "@/components"

interface NavigationProps {
  className?: string
}

export const Navigation = ({ className = "", ...props }: NavigationProps) => {
  return (
    <nav {...props}>
      <ul className="flex items-center justify-start gap-3">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="#">Explorar</Link>
        </li>
      </ul>
    </nav>
  )
}
