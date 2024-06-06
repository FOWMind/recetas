import { useTranslations } from 'next-intl'
import { LanguageSelector, Paragraph, Wrapper } from '@/components'

export const Footer = () => {
	const t = useTranslations('Footer')
	return (
		<footer className="p-5 mt-5">
			<Wrapper>
				<Paragraph className="text-center">&copy; Recetas. {t('copyright')}</Paragraph>
				<LanguageSelector />
			</Wrapper>
		</footer>
	)
}
