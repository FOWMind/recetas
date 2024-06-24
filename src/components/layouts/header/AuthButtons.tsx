import { Link } from '@/components/common'
import { useTranslations } from 'next-intl'

export const AuthButtons = () => {
	const t = useTranslations('Header')
	return <Link href="/login">{t('auth')}</Link>
}
