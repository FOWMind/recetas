import { useTranslations } from 'next-intl'
import { Wrapper } from './Wrapper'
import { Paragraph } from '../common'

export const Footer = () => {
	const t = useTranslations('Footer')
	return (
		<footer className="p-5 mt-5">
			<Wrapper>
				<Paragraph className="text-center">&copy; Recetas. {t('copyright')}</Paragraph>
			</Wrapper>
		</footer>
	)
}
