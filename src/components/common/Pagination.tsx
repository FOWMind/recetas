import type { PaginationProps } from '@/types'
import { Button, Icon } from '@/components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const Pagination = ({ className = '', amount, currentPage }: PaginationProps) => {
	return (
		<div className={`flex gap-2 justify-center flex-wrap ${className}`}>
			<Button variant="featured" className="!px-0 w-12">
				<Icon icon={MdKeyboardArrowLeft} />
			</Button>

			{[...Array(amount)].map((_, i) => (
				<Button variant={currentPage === i + 1 ? 'featured' : null} className="!px-0 w-12">
					{i + 1}
				</Button>
			))}

			<Button variant="featured" className="!px-0 w-12">
				<Icon icon={MdKeyboardArrowRight} />
			</Button>
		</div>
	)
}
