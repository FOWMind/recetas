import { PaginationButton } from '@/components'
import { RecipePaginationContext } from '@/context'
import type { PaginationStaticPagesProps } from '@/types'
import { useContext } from 'react'

export const PaginationStaticPages = ({ children }: PaginationStaticPagesProps) => {
	const { currentPage, lastPage } = useContext(RecipePaginationContext)
	return (
		<>
			{/* First page */}
			{currentPage > 1 && (
				<PaginationButton variant={currentPage === 1 ? 'featured' : null} value={1}>
					1
				</PaginationButton>
			)}

			{children}

			{/* Last page */}
			{currentPage !== lastPage && <PaginationButton value={lastPage}>{lastPage}</PaginationButton>}
		</>
	)
}
