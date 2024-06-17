'use client'
import { useRecipeStore } from '@/store'
import { RecipePagination } from '@/types'
import React, { createContext } from 'react'

export const RecipePaginationContext = createContext<RecipePagination>({} as RecipePagination)

interface RecipePaginationProviderProps {
	children: React.ReactNode
}

export const RecipePaginationProvider = ({ children }: RecipePaginationProviderProps) => {
	const { pagination } = useRecipeStore()
	return <RecipePaginationContext.Provider value={pagination}>{children}</RecipePaginationContext.Provider>
}
