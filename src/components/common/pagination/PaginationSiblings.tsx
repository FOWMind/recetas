import { PaginationButton } from '@/components'
import { RecipePaginationContext } from '@/context'
import type { PaginationSiblingsProps } from '@/types'
import { useContext } from 'react'

export const PaginationSiblings = ({ children }: PaginationSiblingsProps) => {
	const { siblingAmount, currentPage, lastPage } = useContext(RecipePaginationContext)
	const siblingArr = new Array(siblingAmount)
	return (
		<>
			{/* Previous siblings */}
			{[...siblingArr].map((_, i) => {
				const value = currentPage - siblingAmount + i
				if (value <= 1) return null
				return (
					<PaginationButton key={`page_prev_${i}`} value={value}>
						{value}
					</PaginationButton>
				)
			})}

			{children}

			{/* Next siblings */}
			{[...siblingArr].map((_, i) => {
				const value = currentPage + (i + 1)
				if (value >= lastPage) return null
				return (
					<PaginationButton key={`page_next_${i}`} value={value}>
						{value}
					</PaginationButton>
				)
			})}
		</>
	)
}
