import { Icon, PaginationButton } from '@/components'
import { RecipePaginationContext } from '@/context'
import type { PaginationArrowsProps } from '@/types'
import { useContext } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const PaginationArrows = ({ children }: PaginationArrowsProps) => {
	const { currentPage } = useContext(RecipePaginationContext)

	return (
		<>
			{/* Previous */}
			<PaginationButton variant="featured" value={currentPage - 1} previous>
				<Icon icon={MdKeyboardArrowLeft} />
			</PaginationButton>

			{children}

			{/* Next */}
			<PaginationButton variant="featured" value={currentPage + 1} next>
				<Icon icon={MdKeyboardArrowRight} />
			</PaginationButton>
		</>
	)
}
