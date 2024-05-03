export interface RestOfProps {
  [restOfProps: string]: any
}

export type AsProp = keyof JSX.IntrinsicElements

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ButtonVariant = "default" | "dark"

export interface Recipe {
  id: string
  thumbnail: string
  datetime: Date
  title: string
  postSlug: string
}

export interface LinkProps extends RestOfProps {
  href: string
  className?: string
  shallow?: boolean
}

export type MappableChildren = React.ReactElement | Array<React.ReactElement>
