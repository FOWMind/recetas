import { categories } from "@/constants"
import type { Category } from "@/types"

export const recipeCategoryFormatter = (category: Category): string => {
  return categories[category]
}
