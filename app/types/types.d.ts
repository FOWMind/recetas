export interface RestOfProps {
  [restOfProps: string]: any
}

export type AsProp = keyof JSX.IntrinsicElements

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl"

export type ButtonVariant = "default" | "dark"
