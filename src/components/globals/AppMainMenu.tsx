import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'

export default function AppMainMenu({ locale }: { locale: string }) {
  const t = useTranslations('')

  return (
    <nav className='inline-flex gap-5'>
      <Link lang={locale} href={`/about`}>
        {t('ISFT haqida')}
      </Link>
      <a href=''>{t('Faoliyat')}</a>
      <a href=''>{t('Abiturientlarga')}</a>
      <a href=''>{t('Talabalarga')}</a>
      <a href=''>{t('Yangiliklar')}</a>
      <a href=''>{t('FAQ')}</a>
      <a href=''>{t('Aloqa')}</a>
    </nav>
  )
}
