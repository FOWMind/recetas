import type { PaginationProps } from '@/types'
import {
	PaginationArrows,
	PaginationButton,
	PaginationExtraPages,
	PaginationSiblings,
	PaginationStaticPages,
} from '@/components'
import { useContext } from 'react'
import { RecipePaginationContext } from '@/context'

// TODO: Get all the necessary props from state or a provider.
export const Pagination = ({ className = '', ...props }: PaginationProps) => {
	const { currentPage } = useContext(RecipePaginationContext)
	return (
		<div className={`flex gap-2 justify-center items-center flex-wrap ${className}`} {...props}>
			<PaginationArrows>
				<PaginationStaticPages>
					<PaginationExtraPages>
						<PaginationSiblings>
							<PaginationButton variant="featured" disabled value={currentPage}>
								{currentPage}
							</PaginationButton>
						</PaginationSiblings>
					</PaginationExtraPages>
				</PaginationStaticPages>
			</PaginationArrows>
		</div>
	)
}
