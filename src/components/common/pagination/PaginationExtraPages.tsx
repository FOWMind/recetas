import { PaginationButton } from '@/components'
import { RecipePaginationContext } from '@/context'
import { useContext } from 'react'

interface PaginationExtraPagesProps {
	children: React.ReactNode
}

export const PaginationExtraPages = ({ children }: PaginationExtraPagesProps) => {
	const { currentPage, siblingAmount, lastPage } = useContext(RecipePaginationContext)
	const middlePreviousPage = Math.floor((1 + (currentPage - siblingAmount)) / 2)
	const middleNextPage = Math.floor((currentPage + siblingAmount + lastPage) / 2)

	return (
		<>
			{currentPage > siblingAmount + 2 && (
				<PaginationButton value={middlePreviousPage} previous>
					...
				</PaginationButton>
			)}

			{children}

			{currentPage < lastPage - (siblingAmount + 1) && (
				<PaginationButton value={middleNextPage} next>
					...
				</PaginationButton>
			)}
		</>
	)
}
