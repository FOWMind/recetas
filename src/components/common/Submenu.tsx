'use client'
import { useClickOutside } from '@/hooks'
import type { SubmenuProps } from '@/types'
import { Children, useRef } from 'react'

export const Submenu = ({ className = '', children, onClose = () => {}, ...props }: SubmenuProps) => {
	const submenuRef = useRef<HTMLUListElement>(null)

	useClickOutside({
		ref: submenuRef,
		handleClick: onClose,
	})

	return (
		<ul
			ref={submenuRef}
			className={`z-20 w-52 min-w-max rounded-lg border border-gray-300 bg-white py-4 dark:border-neutral-800 dark:bg-black ${className}`}
			{...props}>
			{Children.map(children, (child, i) => (
				<li
					key={child + i.toString()}
					className="direct-child-block [&>*]:hover:bg-gray-200 [&>*]:dark:hover:bg-neutral-800 [&>*]:rounded-none">
					{child}
				</li>
			))}
		</ul>
	)
}
