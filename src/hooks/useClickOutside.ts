import type { useClickOutsideProps } from '@/types'
import { useEffect } from 'react'

export const useClickOutside = ({ ref, handleClick }: useClickOutsideProps) => {
	useEffect(() => {
		const close = (e: MouseEvent) => {
			if (ref.current && e.target !== ref.current) handleClick()
		}
		document.addEventListener('click', close)
		return () => document.removeEventListener('click', close)
	}, [ref, handleClick])
}
