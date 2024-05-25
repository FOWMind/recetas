import { ToggleThemeProps } from '@/types'
import { toggleTheme } from '@/utils/theme'

export const ToggleTheme = ({ className = '', ...props }: ToggleThemeProps) => {
	return (
		<button onClick={toggleTheme} {...props}>
			toggle
		</button>
	)
}
