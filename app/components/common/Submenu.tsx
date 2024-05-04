import type { SubmenuProps } from "@/types"
import { Children } from "react"

export const Submenu = ({ className = "", children, ...props }: SubmenuProps) => {
  return (
    <ul
      className={`z-20 w-52 min-w-max translate-y-[90%] rounded-lg border border-gray-300 bg-white py-4 ${className}`}
      {...props}>
      {Children.map(children, (child, i) => (
        <li key={i} className="direct-child-block hover:bg-gray-200">
          {child}
        </li>
      ))}
    </ul>
  )
}
