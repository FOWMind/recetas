import { IconType as ReactIconType } from "react-icons"

export type AsProp = keyof JSX.IntrinsicElements
export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl"
export type ButtonVariant = "default" | "dark"
export type MappableChildren = React.ReactElement | Array<React.ReactElement>
export type IconType = ReactIconType

export interface RestOfProps {
  [restOfProps: string]: any
}

export interface WrapperProps extends RestOfProps {
  className?: string
}

export interface HeaderProps extends RestOfProps {
  className?: string
}

export interface HeadlineProps extends RestOfProps {
  as?: Heading
  className?: string
  size?: ComponentSize
}

export interface LogoProps extends RestOfProps {
  className?: string
}

export interface NavigationProps {
  className?: string
}

export interface HeroProps extends RestOfProps {
  className?: string
}

export interface MainContentProps extends RestOfProps {
  className?: string
}

export interface ButtonProps extends RestOfProps {
  className?: string
  variant?: ButtonVariant
}

export interface RecipesProviderProps {
  children: React.ReactNode
}

export interface Recipe {
  id: string
  thumbnail: string
  datetime: Date
  title: string
  postSlug: string
}

export interface RecipeCardProps extends RestOfProps, Omit<Recipe, "id" | "thumbnail"> {
  className?: string
}

export interface LinkProps extends RestOfProps {
  href: string
  className?: string
  shallow?: boolean
}

export interface LinkListProps extends Omit<LinkProps, "href"> {
  label: string
  className?: string
  children: MappableChildren
}

export interface SubmenuProps extends RestOfProps {
  className?: string
  children: MappableChildren
}

export interface IconProps extends RestOfProps {
  icon: IconType
  className?: string
}

export interface FieldProps extends RestOfProps {
  type?: React.HTMLInputTypeAttribute
  className?: string
}

export interface FieldGroupProps extends RestOfProps {
  icon?: IconType
  className?: string
}
