import { Icon, PaginationButton } from '@/components'
import { RecipePaginationContext } from '@/context'
import { useContext } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface PaginationArrowsProps {
	children: React.ReactNode
}

export const PaginationArrows = ({ children }: PaginationArrowsProps) => {
	const { currentPage } = useContext(RecipePaginationContext)

	return (
		<>
			{/* Previous */}
			<PaginationButton variant="featured" value={currentPage - 1}>
				<Icon icon={MdKeyboardArrowLeft} />
			</PaginationButton>

			{children}

			{/* Next */}
			<PaginationButton variant="featured" value={currentPage + 1}>
				<Icon icon={MdKeyboardArrowRight} />
			</PaginationButton>
		</>
	)
}
