import { useTranslations } from 'next-intl'
import { Headline } from '@/components'

export const Loading = () => {
	const t = useTranslations('Loading')
	return <Headline size="xs">{t('self')}</Headline>
}
