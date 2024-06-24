import { Button, Field, Headline, Link } from '@/components'
import { useTranslations } from 'next-intl'

export default function LoginPage() {
	const t = useTranslations('Login')
	return (
		<section>
			<form className="[&>*]:max-w-none max-w-sm mx-auto flex flex-col gap-y-2">
				<Headline size="sm">{t('title')}</Headline>
				<Field placeholder={t('emailOrUsername')} />
				<Field type="password" placeholder={t('password')} />
				<Button variant="featured">{t('submit')}</Button>
				<div className="flex flex-col">
					<Link href="/forgot-password">{t('forgotPassword')}</Link>
					<Link href="/signup">{t('createAccount')}</Link>
				</div>
			</form>
		</section>
	)
}
