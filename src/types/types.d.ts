import { IconType as ReactIconType } from "react-icons"

export type AsProp = keyof JSX.IntrinsicElements
export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl"
export type ButtonVariant = "default" | "featured"
export type MappableChildren = React.ReactElement | Array<React.ReactElement>
export type IconType = ReactIconType
export type Category = number

export interface RestOfProps {
  [restOfProps: string]: any
}

export interface OptionalClassName {
  className?: string
}

export interface Categories {
  [key: number]: string
}

export interface CategoriesFilterProps extends RestOfProps, OptionalClassName {
  categories: Category[]
  categoryFormatter: Function
  defaultCategory?: Category
}

export interface WrapperProps extends RestOfProps, OptionalClassName {}
export interface HeaderProps extends RestOfProps, OptionalClassName {}

export interface HeadlineProps extends RestOfProps, OptionalClassName {
  as?: Heading
  size?: ComponentSize
}

export interface LogoProps extends RestOfProps, OptionalClassName {}
export interface NavigationProps extends OptionalClassName {}
export interface HeroProps extends RestOfProps, OptionalClassName {}
export interface MainContentProps extends RestOfProps, OptionalClassName {}

export interface ButtonProps extends RestOfProps, OptionalClassName {
  variant?: ButtonVariant
}

export interface ParagraphProps extends RestOfProps, OptionalClassName {}

export interface RecipesProviderProps {
  children: React.ReactNode
}

export interface RecipePageProps {
  params: {
    recipeSlug: string
  }
}

export interface Recipe {
  id: string
  thumbnail: string
  datetime: Date
  title: string
  postSlug: string
  categories: Category[]
}

export interface RecipeCardProps extends RestOfProps, OptionalClassName, Omit<Recipe, "id" | "thumbnail"> {}

export interface LinkProps extends RestOfProps, OptionalClassName {
  href: string
  shallow?: boolean
}

export interface LinkListProps extends OptionalClassName, Omit<LinkProps, "href"> {
  label: string
  children: MappableChildren
}

export interface SubmenuProps extends RestOfProps, OptionalClassName {
  children: MappableChildren
}

export interface IconProps extends RestOfProps, OptionalClassName {
  icon: IconType
}

export interface FieldProps extends RestOfProps, OptionalClassName {
  type?: React.HTMLInputTypeAttribute
}

export interface FieldGroupProps extends RestOfProps, OptionalClassName {
  icon?: IconType
}

export interface RecipesListProps extends RestOfProps, OptionalClassName {
  recipes: Recipe[]
}
