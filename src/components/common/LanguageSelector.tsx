'use client'
import { Button, Icon, LanguageSelectorModal } from '@/components'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { IoLanguage } from 'react-icons/io5'

export const LanguageSelector = () => {
	const t = useTranslations('Footer.languageSelector')
	const [showSelector, setShowSelector] = useState(false)

	const toggleSelector = () => setShowSelector((x) => !x)

	return (
		<div className="relative inline-block">
			<Button className="!p-0" onClick={toggleSelector}>
				<Icon icon={IoLanguage} /> {t('label')}
			</Button>

			{showSelector && <LanguageSelectorModal toggleSelector={toggleSelector} />}
		</div>
	)
}
