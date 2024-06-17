'use client'
import { useRecipeStore } from '@/store'
import type { RecipePagination, RecipePaginationProviderProps } from '@/types'
import React, { createContext } from 'react'

export const RecipePaginationContext = createContext<RecipePagination>({} as RecipePagination)

export const RecipePaginationProvider = ({ children }: RecipePaginationProviderProps) => {
	const { pagination } = useRecipeStore()
	return <RecipePaginationContext.Provider value={pagination}>{children}</RecipePaginationContext.Provider>
}
