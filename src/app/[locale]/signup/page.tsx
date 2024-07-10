import { Button, Field, Headline, Link } from '@/components'
import { useTranslations } from 'next-intl'

export default function SignUpPage() {
	const t = useTranslations('AuthPage')
	return (
		<section>
			<form className="[&>*]:max-w-none max-w-sm mx-auto flex flex-col gap-y-2">
				<Headline size="sm">{t('registerTitle')}</Headline>
				<Field placeholder={t('emailOrUsername')} />
				<Field type="password" placeholder={t('password')} />
				<Button variant="featured">{t('submit')}</Button>
				<div className="flex flex-col">
					<Link href="/login">{t('login')}</Link>
				</div>
			</form>
		</section>
	)
}
