import type { ParagraphProps } from "@/types"

export const Paragraph = ({ className = "", ...props }: ParagraphProps) => {
  return <p className={`text-base text-black dark:text-white ${className}`} {...props} />
}
