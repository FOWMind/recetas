import type { ButtonProps } from '@/types'
import { useContext, useMemo } from 'react'
import { Button, Link } from '@/components'
import { RecipePaginationContext } from '@/context'

interface PaginationButtonProps extends ButtonProps {
	value: number
	next?: boolean
	previous?: boolean
	children: React.ReactNode
}
export const PaginationButton = ({ value, next, previous, disabled, children, ...props }: PaginationButtonProps) => {
	const { currentPage, lastPage, setCurrentPage } = useContext(RecipePaginationContext)

	const isDisabled = useMemo(() => {
		if (disabled) return true
		if (previous && currentPage <= 1) return true
		if (next && currentPage >= lastPage) return true

		return false
	}, [currentPage, disabled, lastPage, next, previous])

	const handleClick = () => {
		if (!setCurrentPage) return
		setCurrentPage(value)
		console.log(currentPage, value)
	}

	return (
		<Button className="!px-0 w-12" {...props} onClick={handleClick} disabled={isDisabled}>
			{children}
		</Button>
	)
}
