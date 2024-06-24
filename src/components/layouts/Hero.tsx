import { Button, Headline, Paragraph } from '@/components'
import { recipes } from '@/data'
import type { HeroProps } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Hero = ({ className = '', ...props }: HeroProps) => {
	const t = useTranslations('Hero')
	const featuredRecipe = recipes.data.find((r) => r.featured)

	if (!featuredRecipe) {
		return null
	}

	return (
		<section
			className={`relative flex min-h-[400px] w-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-lime-600 before:absolute before:inset-0 before:h-full before:w-full before:bg-black/10 before:content-[''] ${className}`}
			{...props}>
			<Image
				src={featuredRecipe.thumbnail}
				alt=""
				width={1260}
				height={400}
				className="absolute top-0 left-0 w-full h-full object-cover object-center select-none"
				draggable={false}
			/>
			<Paragraph className="absolute top-10 left-10 z-10 text-white">{t('featuredText')}</Paragraph>
			<div className="relative z-10 flex max-w-xl flex-col items-start justify-start gap-5 p-10">
				<Headline size="lg" className="text-white">
					{featuredRecipe.title}
				</Headline>
				<Button>{t('viewRecipe')}</Button>
			</div>
		</section>
	)
}
