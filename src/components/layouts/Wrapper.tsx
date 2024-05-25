'use client'
import { useRecipeStore } from '@/store'
import type { WrapperProps } from '@/types'
import { setInitialTheme } from '@/utils/theme'
import { useEffect } from 'react'

export const Wrapper = ({ className = '', ...props }: WrapperProps) => {
	const { setInitialRecipes } = useRecipeStore()
	setInitialTheme()

	useEffect(() => setInitialRecipes(), [setInitialRecipes])

	return (
		<div className={`mx-auto min-h-screen w-full max-w-screen-lg p-5 2xl:max-w-screen-xl ${className}`} {...props} />
	)
}
