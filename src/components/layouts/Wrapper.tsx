'use client'
import { useRecipeStore, useThemeStore } from '@/store'
import type { WrapperProps } from '@/types'
import { useEffect } from 'react'

export const Wrapper = ({ className = '', ...props }: WrapperProps) => {
	const { setInitialRecipes } = useRecipeStore()
	const { setInitialTheme } = useThemeStore()
	useEffect(() => setInitialTheme(), [setInitialTheme])
	useEffect(() => setInitialRecipes(), [setInitialRecipes])

	return <div className={`mx-auto w-full max-w-screen-lg px-5 2xl:max-w-screen-xl ${className}`} {...props} />
}
