"use client"
import { Button } from "@/components"
import { globalDefaultCategory } from "@/constants"
import type { CategoriesFilterProps, Category } from "@/types"
import { useState } from "react"

export const CategoriesFilter = ({
  className = "",
  categories,
  categoryFormatter,
  defaultCategory = globalDefaultCategory,
  ...props
}: CategoriesFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>(defaultCategory)

  const handleCategory = (category: Category = globalDefaultCategory) => setActiveCategory(category)

  return (
    <div className={`my-6 flex w-fit gap-y-4 rounded-full border border-gray-300 p-1 ${className}`} {...props}>
      <Button variant={globalDefaultCategory === activeCategory ? "dark" : undefined} onClick={() => handleCategory()}>
        Todo
      </Button>
      {categories.map((category, i) => (
        <Button
          key={i}
          variant={category === activeCategory ? "dark" : undefined}
          onClick={() => handleCategory(category)}>
          {categoryFormatter(category)}
        </Button>
      ))}
    </div>
  )
}
