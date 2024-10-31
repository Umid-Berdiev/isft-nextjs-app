import Heading2 from '@/src/components/typography/Heading2'
import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div className='container pb-10'>
      <section className='flex flex-col items-center justify-center py-16'>
        <Heading2>{t('Start your journey')}</Heading2>
        <p>
          {t(
            'This nextjs template includes theme swicher, lang switcher and tailwindcss with daisyUI'
          )}
        </p>
      </section>
    </div>
  )
}
