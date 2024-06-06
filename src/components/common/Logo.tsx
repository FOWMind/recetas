import { Headline } from '@/components'
import type { LogoProps } from '@/types'

export const Logo = ({ className = '', ...props }: LogoProps) => {
	return (
		<div className={`${className}`} {...props}>
			<Headline>Recetas</Headline>
		</div>
	)
}
