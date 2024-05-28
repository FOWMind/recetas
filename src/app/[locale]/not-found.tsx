import { Button, Headline, Link, Paragraph } from '@/components'
import { useTranslations } from 'next-intl'

export default function NotFound() {
	const t = useTranslations('NotFound')
	return (
		<div className="mt-10 flex flex-col items-center justify-center">
			<Headline>404</Headline>
			<Paragraph className="my-5">{t('description')}</Paragraph>
			<Link href="/" className="!p-0">
				<Button as="span" variant="featured">
					{t('button')}
				</Button>
			</Link>
		</div>
	)
}
