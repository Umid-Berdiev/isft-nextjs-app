import Heading2 from '@/src/components/typography/Heading2'
import { useTranslations } from 'next-intl'

export default function News() {
  const t = useTranslations('')

  return (
    <div className='container pb-4'>
      <Heading2>{t('Yangiliklar')}</Heading2>
      <p>{t('Sahifa yaratilish jarayonida')}</p>
    </div>
  )
}
