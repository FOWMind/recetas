'use client'
import { DESKTOP_BREAKPOINT } from '@/constants'
import { useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

export const useViewportSize = () => {
	const [isMobileSize, setMobileSize] = useState<boolean>(true)

	const checkWidth = useCallback(() => {
		const width = window.innerWidth
		setMobileSize(width < DESKTOP_BREAKPOINT)
	}, [])

	useEffect(() => {
		// You don't usually resize the viewport when you're on mobile.
		// So we won't check the viewport size.
		if (isMobile) return

		window.addEventListener('resize', checkWidth)

		return () => {
			window.removeEventListener('resize', checkWidth)
		}
	}, [checkWidth])

	return { isMobileSize }
}
